import {Component, Input, OnInit} from '@angular/core';
import {CreateMeetingTodoCommand, MeetingTodo} from '../../../../../../../core/api/v1';
import {WdysMeetingRootService} from "../../../application/services/wdys-meeting-root.service";
import {MeetingDomainService} from "../../../application/services/meeting-domain.service";
import {ActivatedRoute} from "@angular/router";
import {SessionDomainService} from "../../../../meetingsession/application/session-domain.service";

@Component({
  selector: 'app-session-todo',
  templateUrl: './session-todo.component.html',
  styleUrls: ['./session-todo.component.scss']
})
export class SessionTodoComponent implements OnInit {

  private $sessionId: string;
  private $meetingId: string;
  private $selectedTodo: string;

  public showHeader = false;
  public showCreateDialog = false;
  public cmd: CreateMeetingTodoCommand  = {};

  constructor( private root: WdysMeetingRootService,
               private router: ActivatedRoute,
               private sessionDomain: SessionDomainService,
               private domain: MeetingDomainService) { }

  ngOnInit(): void {
      this.root.loadTodo(this.$sessionId);
      this.$selectedTodo = this.router.snapshot.queryParamMap.get('todo');
  }

  @Input()
  set sessionId( s: string ){
        this.$sessionId = s;
  }

  @Input()
  set meetingId( m: string ){
      this.$meetingId = m;
  }

  get todoList(){
      return this.sessionDomain.session.todos;
  }

    toggle(t: MeetingTodo) {
      if( t.checked ){
          this.sessionDomain.todoCommands.done( t.id );
      } else {
          this.sessionDomain.todoCommands.open( t.id );
      }
    }


    get selectedTodo(){
      return this.$selectedTodo;
    }


    addNewTodo() {
        this.sessionDomain.createSessionTodo( this.cmd , () => {
            this.cmd.description = '';
            this.cmd.dueDate = undefined;
        });
    }

    delete(t: MeetingTodo) {
        this.sessionDomain.todoCommands.delete( t.id );
    }
}

