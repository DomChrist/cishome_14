import {Component, Input, OnInit} from '@angular/core';
import {CurrentlyPlaying} from "../../model/currently-playing";

@Component({
  selector: 'app-spotify-currently-stream',
  templateUrl: './spotify-currently-stream.component.html',
  styleUrls: ['./spotify-currently-stream.component.scss']
})
export class SpotifyCurrentlyStreamComponent implements OnInit {

  private $current: CurrentlyPlaying;

  constructor(  ) { }



  ngOnInit(): void {
  }

  @Input()
  set current( c: CurrentlyPlaying ){
      console.log(c);
      this.$current = c;
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
