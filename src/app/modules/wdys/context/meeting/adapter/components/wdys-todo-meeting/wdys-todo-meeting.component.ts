import {Component, Input, OnInit} from '@angular/core';
import {WdysMeetingRootService} from "../../../application/services/wdys-meeting-root.service";
import {MeetingDomainService} from "../../../application/services/meeting-domain.service";
import {Router} from "@angular/router";
import {MeetingTodo} from "../../../../../../../core/api/v1";

@Component({
  selector: 'app-wdys-todo-meeting',
  templateUrl: './wdys-todo-meeting.component.html',
  styleUrls: ['./wdys-todo-meeting.component.scss']
})
export class WdysTodoMeetingComponent implements OnInit {

  private $meeting: string;

  constructor(
      private root: WdysMeetingRootService,
      private routing: Router,
      private domain: MeetingDomainService
  ) { }

  ngOnInit(): void {
        //this.domain.loadMeetingTodos();
  }

  public loadMeetingFromTodo( m: MeetingTodo ){
      this.domain.open( m.meetingSessionId.meeting.value , m.meetingSessionId.session.value );
      this.domain.clear();
      this.routing.navigate( ['/wdys/meeting/view', m.meetingSessionId.meeting.value, 'session', m.meetingSessionId.session.value] , {
          queryParams: {
              todo : m.id
          }
      } );
  }

  @Input()
  set meeting( s: string ){
      this.$meeting = s;
  }

  get meeting(){
      return this.domain.meeting.id;
  }

  get todos(){
      return this.domain.meetingTodos?.todos;
  }

}
