import { Component, OnInit } from '@angular/core';
import {CurrentPlayingAggregate, SpotifyPlayerService} from "../spotify-player.service";
import {CurrentlyPlaying} from "../model/currently-playing";

@Component({
  selector: 'app-spotify-player',
  templateUrl: './spotify-player.component.html',
  styleUrls: ['./spotify-player.component.scss']
})
export class SpotifyPlayerComponent implements OnInit {

  constructor(public spotify: SpotifyPlayerService) { }

  ngOnInit(): void {
  }

  get current(): CurrentlyPlaying {
      return this.spotify.current;
  }

  get currentPlaying(): CurrentPlayingAggregate{
      return this.spotify.currentPlaying;
  }


}
