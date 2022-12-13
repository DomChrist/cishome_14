import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {
    CreateMeetingCommand,
    CreateMeetingTodoCommand,
    Meeting,
    MeetingSession, MeetingTodoAggregate, SessionTodoAggregate,
    WdysMeetingService, WdysSessionService,
    WdysTodoService
} from '../../../../../../core/api/v1';
import {WdysMeetingNotesService} from '../../../../../../core/api/v1/api/wdysMeetingNotes.service';

@Injectable({
  providedIn: 'root'
})
export class WdysMeetingRootService {

  private $meeting; Meeting;

  private $todos: SessionTodoAggregate;


  constructor(
      private wdys: WdysMeetingService,
      private meetingService: WdysMeetingService,
      private sessionService: WdysSessionService,
      private todo: WdysTodoService,
      private noteService: WdysMeetingNotesService
  ) {
      this.todo.apiWdysTodoQueryMeetingGet();
  }


  public todos( id: string ): Observable<HttpResponse<any>>{
      return this.todo.apiWdysTodoQueryMeetingGet( id , 'response' );
  }

  public load( id: string ){
      this.$todos = null;
      this.$meeting = null;
      this.wdys.apiMeetingQueryIdGet( id , 'response').subscribe(
          {
              next: (m) => {
                  this.$meeting = m.body;
              }
          }
      );
  }

  public createMeeting( cmd: CreateMeetingCommand, onSuccess?: () => void ){
      this.wdys.apiMeetingCmdNewPost( cmd , 'response' ).subscribe( {
          next: resp => {
              onSuccess();
          }
      } );
  }

  public notes( s: string ){
      return this.noteService.apiWdysMeetingnoteQuerySessionSessionIDGet( s , 'response');
  }



  get meeting(): Meeting{
      return this.$meeting;
  }

  get sessionTodos(){
      return this.$todos;
  }

  public session( id: string ): MeetingSession{
      if ( this.$meeting ){
          console.log(this.$meeting);
          return this.$meeting.session.sessions.filter( s => s.meetingSessionId === id)[0];
      }
      return null;
  }

  public loadAgenda( meeting: string , session: string ){
      return this.sessionService.apiMeetingSessionAgendaMeetingIdSessionSessionIdGet( meeting , session , 'response' );
  }


  public loadTodo( session: string ){
      this.todo.apiWdysTodoQuerySessionGet( session , 'response').subscribe(
          {
              next: (resp) => this.$todos = resp.body
          }
      );
  }

  public saveSessionTodo( cmd: CreateMeetingTodoCommand , success?: () => void ){
      this.todo.apiWdysTodoCmdAddPost( cmd , 'response' ).subscribe( {
          next: (resp) => {
            this.loadTodo( cmd.sessionId);
            success();
          }
      } );
  }


}
