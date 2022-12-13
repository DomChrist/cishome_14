import {Component, Input, OnInit} from '@angular/core';
import {CreateMeetingTodoCommand} from '../../../../../../../core/api/v1';
import {WdysMeetingRootService} from "../../../application/services/wdys-meeting-root.service";
import {MeetingDomainService} from "../../../application/services/meeting-domain.service";
import {ActivatedRoute} from "@angular/router";

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
               private domain: MeetingDomainService) { }

  ngOnInit(): void {
      this.root.loadTodo(this.$sessionId);
      this.$selectedTodo = this.router.snapshot.queryParamMap.get('todo');
      alert(this.$selectedTodo);
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
      return this.domain.sessionTodos?.todos;
  }

    toggle(t: any) {

    }


    get selectedTodo(){
      return this.$selectedTodo;
    }


    addNewTodo() {
        this.cmd.sessionId = this.$sessionId;
        this.cmd.meetingId = this.$meetingId;
        this.root.saveSessionTodo( this.cmd );
    }
}

