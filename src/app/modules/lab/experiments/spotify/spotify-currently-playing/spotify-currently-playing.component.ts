import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SpotifyClientService} from "../spotify-client.service";
import {CurrentlyPlaying} from "../model/currently-playing";
import {SpotifyPlayerService} from "../spotify-player.service";

@Component({
  selector: 'app-spotify-currently-playing',
  templateUrl: './spotify-currently-playing.component.html',
  styleUrls: ['./spotify-currently-playing.component.scss']
})
export class SpotifyCurrentlyPlayingComponent implements OnInit {
  private $current: CurrentlyPlaying;
  constructor( public spotify: SpotifyPlayerService) { }

  ngOnInit(): void {
      this.spotify.subscribe();
  }

    next() {
      this.spotify.next();
    }

    private init(value: CurrentlyPlaying) {
    }


    get current(): CurrentlyPlaying {
        return this.$current;
    }

    get image() {
        return this.$current.item
            .album
            .images[2].url;
    }
}
