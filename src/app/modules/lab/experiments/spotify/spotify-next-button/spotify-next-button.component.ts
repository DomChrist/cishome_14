import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SpotifyClientService} from "../spotify-client.service";
import {SpotifyPlayerService} from "../spotify-player.service";

@Component({
  selector: 'app-spotify-next-button',
  templateUrl: './spotify-next-button.component.html',
  styleUrls: ['./spotify-next-button.component.scss']
})
export class SpotifyNextButtonComponent implements OnInit {

  constructor( private spotify: SpotifyPlayerService) { }

  ngOnInit(): void {
  }

    next() {
      this.spotify.next();
    }
}
