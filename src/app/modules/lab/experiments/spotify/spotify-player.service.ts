import { Injectable } from '@angular/core';
import {CurrentlyPlaying} from './model/currently-playing';
import {Observable, Subject} from 'rxjs';
import {SpotifyClientService} from './spotify-client.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlayerService {

  private $current: CurrentlyPlaying;
  private $playingAggregate: CurrentPlayingAggregate;
  private $subject = new Subject<CurrentlyPlaying>();
  public currentPlayingStream = this.$subject.asObservable();

  private $interval;

  constructor( private spotify: SpotifyClientService) {
        this.$loadCurrent();
        window.setInterval( () => this.$loadCurrent() , 30000 );
  }


  public subscribe(): Observable<CurrentlyPlaying> {
      // window.setTimeout( () => this.$loadCurrent() , 500 );
      return this.currentPlayingStream;
  }

  private $loadCurrent(){
      window.clearInterval( this.$interval );
      const TIME = 800;
      this.spotify.player.current().subscribe(
          {
              next: (value) => {
                  this.$playingAggregate = new CurrentPlayingAggregate( value );
                  this.$current = value;
                  this.$subject.next( value );
                  this.$interval = window.setInterval( () => {
                        this.$playingAggregate.addProgress(TIME);
                        if( this.$playingAggregate.isOver ){
                            console.log('song is over');
                            this.$loadCurrent();
                        }
                  } , TIME );
              }
          }
      );
  }

  get current(): CurrentlyPlaying {
      if ( !this.$current ){
          // this.$loadCurrent();
      }
      return this.$current;
  }

  get currentPlaying(): CurrentPlayingAggregate{
      return this.$playingAggregate;
  }

  public next(){
      this.spotify.player
          .next()
          .subscribe({
              next: () => this.$loadCurrent()
          });
  }


    refresh() {
        this.$loadCurrent();
    }
}

export class CurrentPlayingAggregate{

    private readonly current: CurrentlyPlaying;
    private readonly duration: number;

    private $progress: number;

    constructor( c: CurrentlyPlaying ) {
        this.current = c;
        this.duration = c.item.duration_ms;
        this.$progress = c.progress_ms;
    }

    public progress( p: number ){
        this.$progress = p;
    }

    public addProgress( p: number ){
        this.$progress += p;
    }

    get currentPlaying(){
        return this.current;
    }

    get progressInPercent(): number{
        return (this.$progress * 100) / this.current.item.duration_ms;
    }

    get isOver(): boolean{
        return this.$progress >= this.duration;
    }

}
