import { Component, OnInit } from '@angular/core';
import {ParticipantService} from "../../../../../../../core/api/v1/api/participant.service";
import {CreateNewMeetingNoteCommand, Participant} from "../../../../../../../core/api/v1";
import {MeetingDomainService} from "../../../application/services/meeting-domain.service";
import {ParticipantDomainService} from "../../../../participants/application/services/participant-domain.service";
import {SessionDomainService} from "../../../../meetingsession/application/session-domain.service";

@Component({
  selector: 'app-create-session-note',
  templateUrl: './create-session-note.component.html',
  styleUrls: ['./create-session-note.component.scss']
})
export class CreateSessionNoteComponent implements OnInit {

  public participant: Participant;
  private $cmd: CreateNewMeetingNoteCommand;

  constructor(
      private participantService: ParticipantService,
      private participantDomain: ParticipantDomainService,
      private domain: MeetingDomainService,
      private sessionDomain: SessionDomainService
  ) { }

  ngOnInit(): void {
      this.$cmd = {};
  }

  get participants(): Participant[]{
      return this.domain.meeting.participants;
  }

  public save(){
      this.$cmd.participantId = this.participant.id;
      this.sessionDomain.createSessionNote( this.cmd );
  }

  select(p: Participant) {
    this.participant = p;
  }

  get session(){
      return this.domain.selectedSession?.session;
  }

  get cmd(){
      if ( !this.$cmd ){
          this.$cmd = {};
      }
      return this.$cmd;
  }

  get note(){
      return this.$cmd;
  }



}
