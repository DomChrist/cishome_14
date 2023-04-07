import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyShowsService} from "../spotify-shows.service";

@Component({
  selector: 'app-spotify-auth-code',
  templateUrl: './spotify-auth-code.component.html',
  styleUrls: ['./spotify-auth-code.component.scss']
})
export class SpotifyAuthCodeComponent implements OnInit {
  // https://developer.spotify.com/documentation/general/guides/authorization/app-settings/
  constructor( private route: ActivatedRoute , private shows: SpotifyShowsService) { }

  ngOnInit(): void {
      this.route.queryParams.subscribe(
          {
              next: value => {
                  console.log(value['code']);
              }
          }
      );
  }

}
