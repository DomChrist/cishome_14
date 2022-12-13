import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-wdys-app',
  templateUrl: './wdys-app.component.html',
  styleUrls: ['./wdys-app.component.scss']
})
export class WdysAppComponent implements OnInit {

  private $menuVisible = false;

  public menu;

  constructor(
      private routing: Router
  ) { }

  ngOnInit(): void {
      this.menu = [
          { label: 'Meetings', icon: 'pi-calendar' , action: () => this.toMeetings() },
          { label: 'Participants', icon: 'pi-users' , action: () => this.toParticipants() }
      ];
  }

    toggleMenu() {
        this.$menuVisible = !this.$menuVisible;
    }

    get menuVisible(){
      return this.$menuVisible;
    }

    set menuVisible( b: boolean){
      this.$menuVisible = b;
    }

    toParticipants() {
        this.routing.navigate( ['wdys', 'participant'] );
        this.$menuVisible = false;
    }

    toMeetings() {
        this.routing.navigate( ['wdys'] );
        this.$menuVisible = false;
    }
}
