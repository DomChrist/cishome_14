import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify-auth',
  templateUrl: './spotify-auth.component.html',
  styleUrls: ['./spotify-auth.component.scss']
})
export class SpotifyAuthComponent implements OnInit {

  private readonly clientId: string = '809a96d47c3746e38ca55b9a5ad28728';
  private readonly redirect: string = 'http://localhost:4200/lab/spotify/auth';

  constructor() { }

  ngOnInit(): void {
  }

    spotifyLogin() {
        location.href = 'https://accounts.spotify.com/authorize?response_type=code&client_id=' + this.clientId + '&redirect_uri=' + this.redirect + '&state=state';
    }
}
