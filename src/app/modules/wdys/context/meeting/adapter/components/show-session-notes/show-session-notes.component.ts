import {Component, Input, OnInit} from '@angular/core';
import {WdysMeetingRootService} from "../../../application/services/wdys-meeting-root.service";
import {MeetingNote} from "../../../../../../../core/api/v1";
import {MeetingDomainService} from "../../../application/services/meeting-domain.service";
import {SessionDomainService} from "../../../../meetingsession/application/session-domain.service";

@Component({
  selector: 'app-show-session-notes',
  templateUrl: './show-session-notes.component.html',
  styleUrls: ['./show-session-notes.component.scss']
})
export class ShowSessionNotesComponent implements OnInit {

  public show_create_meeting_note = false;

  private $sessionId: string;
  private $notes: MeetingNote[];

  private $type;

  constructor( private root: WdysMeetingRootService,
               private sessionDomain: SessionDomainService,
               private domain: MeetingDomainService) {

  }

  ngOnInit(): void {

  }

  @Input()
  set sessionId( id: string ){
  }

  get sessionId(){
      return this.sessionDomain.session.id;
  }

  get notes(): MeetingNote[]{
      return this.sessionDomain.session.notes;
  }

  @Input()
  set type( s: string ){
      this.$type = s;
  }

  get type(){
      if ( !this.$type ){
          return 'list';
      }
      return this.$type;
  }

}
