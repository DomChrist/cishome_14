import { Component, OnInit } from '@angular/core';
import {MeetingSession} from "../../../../../../../core/api/v1";
import {MeetingDomainService} from "../../../application/services/meeting-domain.service";

@Component({
  selector: 'app-session-create-note-dialog',
  templateUrl: './session-create-note-dialog.component.html',
  styleUrls: ['./session-create-note-dialog.component.scss']
})
export class SessionCreateNoteDialogComponent implements OnInit {

  constructor(
      private domain: MeetingDomainService
  ) { }

  ngOnInit(): void {
  }


  get session(): MeetingSession {
      return this.domain.selectedSession.session;
  }

}
