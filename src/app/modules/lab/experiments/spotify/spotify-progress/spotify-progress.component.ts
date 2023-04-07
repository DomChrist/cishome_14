import {Component, Input, OnInit} from '@angular/core';
import {CurrentPlayingAggregate, SpotifyPlayerService} from "../spotify-player.service";
import {CurrentlyPlaying} from "../model/currently-playing";

function input() {

}

@Component({
  selector: 'app-spotify-progress',
  templateUrl: './spotify-progress.component.html',
  styleUrls: ['./spotify-progress.component.scss']
})
export class SpotifyProgressComponent implements OnInit {


  private $aggreage: CurrentPlayingAggregate;
  private interval;

  constructor( private player: SpotifyPlayerService) { }

  ngOnInit(): void {

  }

  @Input()
  set current( c: CurrentPlayingAggregate ){
      this.$init(c);
  }

  private $init( c: CurrentPlayingAggregate ){
      this.$aggreage = c;
  }

  get value(){
      return this.$aggreage.progressInPercent;
  }

}
