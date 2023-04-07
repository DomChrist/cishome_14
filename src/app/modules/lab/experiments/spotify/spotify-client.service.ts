import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from "rxjs";
import {CurrentlyPlaying} from "./model/currently-playing";

/**
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-the-users-currently-playing-track
 */

@Injectable({
  providedIn: 'root'
})
export class SpotifyClientService {

  private readonly $token = 'BQDcEI8gdedpobJ3dmxwJ66faljcSmFkybYzduXWbUdNG5csaQCFPACys_UvBgASqySnn1-7DpSX1jXSlL4aPS9ELirKlCwkY-5BJ7P2TwBDoctsBagPwRgNdYuuaRXdo6hzUGF8bKRUqC7_O2LIcpYoSa_xF6ym3UzsB61iGj9D8_2XkSjDfdR4PwF4xT5KNiXDr7I8mixE_J_i3SZTHXaLey6qjJ6d9fwfjACzig';

  public $currentlyPlaying = new Subject<CurrentlyPlaying>();
  public currentlyPlayingStream: Observable<CurrentlyPlaying> = this.$currentlyPlaying.asObservable();

  constructor( private http: HttpClient) {
  }



  get player(){
      return new Player( this.http , this.$headers() , this );
  }

  get shows(){
      return new Shows( this.http , this.$headers() , this );
  }


    private $headers() {
      let h = new HttpHeaders();
      h = h.append('Authorization' , 'Bearer ' + this.$token);
      return h;
    }
}

export class Player{

    private readonly $spotify = 'https://api.spotify.com/v1/me/player/';

    constructor(private http: HttpClient, private h: HttpHeaders, private p: SpotifyClientService) {
    }

    public current(): Observable<CurrentlyPlaying>{
        const url = this.$spotify + 'currently-playing';
        return this.http.get<CurrentlyPlaying>(
            url,
            {headers: this.h}
        );
    }

    public next(): Observable<void>{
        const url = this.$spotify + 'next';
        return this.http.post<void>(
            url,
            null,
            {headers: this.h}
        );
    }


}


export class Shows{
    private readonly $spotify = 'https://api.spotify.com/v1/me/shows/';

    constructor(private http: HttpClient, private h: HttpHeaders, private p: SpotifyClientService) {
    }

    public list(){
        return this.http.get(
            this.$spotify,
            {headers: this.h}
        );
    }

}
