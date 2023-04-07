import { Component, OnInit } from '@angular/core';
import {ParticipantDetailPageComponent} from "../participant-detail-page.component";
import {Router} from "@angular/router";
import {MeetingSession} from "../../../../../../../../core/api/v1";

@Component({
  selector: 'app-participant-session',
  templateUrl: './participant-session.component.html',
  styleUrls: ['./participant-session.component.scss']
})
export class ParticipantSessionComponent implements OnInit {

  constructor( private root: ParticipantDetailPageComponent,
               private route: Router) { }

  ngOnInit(): void {
  }

  get sessions(){
      console.log(this.root.sessions);
      return this.root.sessions;
  }

  public openSession( m: MeetingSession ){
      this.route.navigate( ['/wdys/meeting/view', m['meetingReference'], 'session', m['id'] ] );
  }

}
