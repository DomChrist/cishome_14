import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WdysMeetingRootService} from '../../../application/services/wdys-meeting-root.service';
import {MeetingSession, SessionWindow} from '../../../../../../../core/api/v1';
import {MenuItem} from "primeng/api";
import {MeetingDomainService} from '../../../application/services/meeting-domain.service';
import {SessionDomainService} from "../../../../meetingsession/application/session-domain.service";

@Component({
  selector: 'app-meeting-session-overview',
  templateUrl: './meeting-session-overview.component.html',
  styleUrls: ['./meeting-session-overview.component.scss']
})
export class MeetingSessionOverviewComponent implements OnInit {

  private $session: MeetingSession;
  public items: MenuItem[];

  constructor(
      private router: ActivatedRoute,
      private domain: MeetingDomainService,
      private root: WdysMeetingRootService,
      private sessionDomain: SessionDomainService
  ) { }

  ngOnInit(): void {
      const m = this.router.snapshot.paramMap.get('id');
      const s = this.router.snapshot.paramMap.get('session');
      this.domain.clearSession();
      this.items = [
          {label: 'DASHBOARD', routerLink: ['/wdys']},
          {label: 'MEETING', routerLink: ['/wdys/meeting/view', m]},
          {label: 'SESSION', routerLink: ['/wdys/meeting/view', m , 'session', s ]},
      ];

      if ( !this.domain.meeting || !this.domain.selectedSession ){
          this.domain.openMeeting(m, s);
      }

      this.sessionDomain.openSession(this.domain.meeting , s);

      console.log('participants');
      console.log( this.domain.selectedSession.session?.participants );

  }


  get session(){
      return this.domain.session;
  }

  get sessionMeeting(){
      return this.domain.meeting;
  }

  get participants(){
      return this.session?.participants;
  }

}
