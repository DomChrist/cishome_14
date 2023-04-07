import { Injectable } from '@angular/core';
import {
    AddParticipantRequest,
    CreateMeetingTodoCommand,
    CreateNewMeetingNoteCommand,
    Meeting,
    SessionTodoAggregate, WdysCollaborationService, WdysMeetingService,
    WdysNotesService,
    WdysSessionService,
    WdysTodoService
} from '../../../../../core/api/v1';
import {SessionAggregate} from '../domain/session-model';

@Injectable({
  providedIn: 'root'
})
export class SessionDomainService {

    private $meetingReference: Meeting;
    private $session: SessionAggregate;

  constructor(
      private sessionService: WdysSessionService,
      private wdysMeeting: WdysMeetingService,
      private sessionNote: WdysNotesService,
      private todo: WdysTodoService,
      private collaborationService: WdysCollaborationService
  ) {

  }


  public openSession( meeting: Meeting , session: string ){
        this.$meetingReference = meeting;
        const s = meeting.session.sessions.filter( (s) => s.meetingSessionId === session )[0];
        this.$session = new SessionAggregate( s );

        this.reload();
  }

  public reload(){
      this.loadTodos();
      this.loadNotes();
      this.loadCollaboration();

  }

  public loadTodos(){
      this.todo.apiWdysTodoQuerySessionGet( this.$session.id , 'response' ).subscribe({
         next: value => {
             const t: SessionTodoAggregate = value.body;
             this.$session.addTodos( t.todos );
         }
      });
  }

  private loadNotes(){
        this.sessionNote.apiWdysMeetingnoteQuerySessionSessionIDGet( this.$session.id , 'response' ).subscribe(
            {
                next: (resp) => {
                    this.$session.addNotes( resp.body );
                }
            }
        );
  }

  private loadCollaboration(){
      this.collaborationService.apiMeetingActivateMeetingMeetingSessionSessionGet(
          this.$session.meeting,
          this.$session.id,
          'response'
      ).subscribe( {
          next: (resp) => {
            console.log( 'collaboration' );
            console.log( resp.body );
            this.$session.activateSharing(resp.body['collaborationSessionCode'] );
          }
      } );
  }

    public createSessionNote( cmd: CreateNewMeetingNoteCommand, onSuccess?: () => void ){
        cmd.meetingId = this.$meetingReference.id;
        cmd.sessionId = this.session.id;
        this.sessionNote.apiWdysMeetingnoteCmdNewPost( cmd , 'response' ).subscribe(
            {
                next: () => {
                    if ( onSuccess ){
                        onSuccess();
                    }
                    this.loadNotes();
                }
            }
        );
    }

    public createSessionTodo( cmd: CreateMeetingTodoCommand , success?: () => void ){
        cmd.sessionId = this.$session.id;
        cmd.meetingId = this.$meetingReference.id;
        this.todo.apiWdysTodoCmdAddPost( cmd , 'response' ).subscribe( {
            next: (resp) => {
                if ( success ) {
                    success();
                }
                this.loadTodos();
            }
        } );
    }


  get session(){
      return this.$session;
  }

  get collaboration(): Collaboration{
      return new Collaboration(this, this.collaborationService);
  }

  get todoCommands(){
      return new Todo( this , this.todo );
  }

  get participant(){
      return new Participant(this , this.wdysMeeting);
  }

}

export class Collaboration{
    private domain: SessionDomainService;
    private collaboration: WdysCollaborationService;
    constructor(domain: SessionDomainService, collaboration: WdysCollaborationService) {
        this.domain = domain;
        this.collaboration = collaboration;
    }

    public start(){
        this.collaboration.apiMeetingActivateMeetingMeetingSessionSessionPost( this.domain.session.meeting , this.domain.session.id , 'response' ).subscribe( {
            next: (resp) => {
                console.log( resp.body );
                this.domain.session.activateSharing( resp.body['collaborationSessionCode'] );
            }
        } );
    }

}

export class Todo {

    private domain: SessionDomainService;
    private todo: WdysTodoService;

    constructor(domain: SessionDomainService, todo: WdysTodoService) {
        this.domain = domain;
        this.todo = todo;
    }

    public done( id: string , onSuccess?: () => void ){
        this.todo.apiWdysTodoCmdTodoDonePost( id , 'response' ).subscribe({
           next: (resp) =>  {
               if( onSuccess ){
                   onSuccess();
               }
           }
        });
    }

    public open( id: string , onSuccess?: () => void ){
        this.todo.apiWdysTodoCmdTodoOpenPost( id , 'response' ).subscribe({
           next: (resp) =>  {
               if( onSuccess ){
                   onSuccess();
               }
           }
        });
    }

    public delete( id: string , onSuccess?: () => void ){
        this.todo.apiWdysTodoCmdTodoDelete( id , 'response' ).subscribe({
           next: (resp) =>  {
               if( onSuccess ){
                   onSuccess();
               }
               this.domain.loadTodos();
           }
        });
    }


}

export class Participant{

    private domain: SessionDomainService;
    private wdys: WdysMeetingService;


    constructor(domain: SessionDomainService, wdys: WdysMeetingService) {
        this.domain = domain;
        this.wdys = wdys;
    }

    public add( cmd: AddParticipantRequest ){
        this.wdys.apiMeetingSessionCmdParticipantAddPost( cmd ).subscribe({
           next: resp => {

           }
        });
    }

}
