import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WdysMeetingRootService} from '../../../application/services/wdys-meeting-root.service';
import {MeetingSession, SessionWindow} from '../../../../../../../core/api/v1';
import {MenuItem} from "primeng/api";
import {MeetingDomainService} from '../../../application/services/meeting-domain.service';

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
      private root: WdysMeetingRootService
  ) { }

  ngOnInit(): void {
      const m = this.router.snapshot.paramMap.get('id');
      const s = this.router.snapshot.paramMap.get('session');
      this.items = [
          {label: 'DASHBOARD', routerLink: ['/wdys']},
          {label: 'MEETING', routerLink: ['/wdys/meeting/view', m]},
          {label: 'SESSION', routerLink: ['/wdys/meeting/view', m , 'session', s ]},
      ];

      if ( !this.domain.meeting && !this.domain.selectedSession ){
          this.domain.open(m, s);
      }

  }


  get session(){
      return this.domain.session;
  }

  get sessionMeeting(){
      return this.domain.meeting;
  }

}
