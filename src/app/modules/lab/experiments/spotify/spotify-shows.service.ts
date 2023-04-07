import { Injectable } from '@angular/core';
import {SpotifyClientService} from "./spotify-client.service";

@Injectable({
  providedIn: 'root'
})
export class SpotifyShowsService {
    private shows: (value: Object) => void;



  constructor( private client: SpotifyClientService) {
      this.client.shows.list()
          .subscribe({
              next: value => this.shows
          });
  }



}
