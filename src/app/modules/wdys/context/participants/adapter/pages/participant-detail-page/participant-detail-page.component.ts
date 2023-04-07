import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ParticipantDomainService} from "../../../application/services/participant-domain.service";
import {MeetingSession, Participant} from "../../../../../../../core/api/v1";

@Component({
  selector: 'app-participant-detail-page',
  templateUrl: './participant-detail-page.component.html',
  styleUrls: ['./participant-detail-page.component.scss']
})
export class ParticipantDetailPageComponent implements OnInit {

  public sessions: MeetingSession[];

  constructor(
      private router: Router,
      private domain: ParticipantDomainService
  ) { }

  ngOnInit(): void {
      if( !this.domain.selectedParticipant ){
          this.router.navigate(['/wdys/participant']);
      }

      this.load( this.domain.selectedParticipant );

  }

  public load( p: Participant){
      this.domain.open(p);
      this.domain.loadSessionsWithParticipant( this.domain.selectedParticipant ).subscribe({
          next: (resp) => {
              console.log(resp.body);
              this.sessions = resp.body;
          }
      });
  }

  get participant(): Participant{
      return this.domain.selectedParticipant;
  }


}
