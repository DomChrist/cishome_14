import {Component, Input, OnInit} from '@angular/core';
import {WdysMeetingRootService} from "../../../application/services/wdys-meeting-root.service";
import {MeetingNote} from "../../../../../../../core/api/v1";
import {MeetingDomainService} from "../../../application/services/meeting-domain.service";

@Component({
  selector: 'app-show-session-notes',
  templateUrl: './show-session-notes.component.html',
  styleUrls: ['./show-session-notes.component.scss']
})
export class ShowSessionNotesComponent implements OnInit {

  public show_create_meeting_note = false;

  private $sessionId: string;
  private $notes: MeetingNote[];


  constructor( private root: WdysMeetingRootService,
               private domain: MeetingDomainService) {

  }

  ngOnInit(): void {
  }

  @Input()
  set sessionId( id: string ){
  }

  get sessionId(){
      return this.domain.selectedSession.session.meetingSessionId;
  }

  get notes(): MeetingNote[]{
      return this.domain.sessionNotes;
  }

  get type(){
      return 'list';
  }

}
