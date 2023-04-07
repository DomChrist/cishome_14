import { Injectable } from '@angular/core';
import {
    AddMeetingSessionCommand, CreateNewMeetingNoteCommand,
    Meeting, MeetingAgenda,
    MeetingNote,
    MeetingSession, MeetingTodoAggregate,
    SessionTodoAggregate,
    WdysMeetingService, WdysNotesService, WdysSessionService,
    WdysTodoService
} from '../../../../../../core/api/v1';
import {WdysMeetingNotesService} from '../../../../../../core/api/v1/api/wdysMeetingNotes.service';
import {SessionDomainService} from "../../../meetingsession/application/session-domain.service";

@Injectable({
  providedIn: 'root'
})
export class MeetingDomainService {


    private $meeting; Meeting;
    private $meetingTodos: MeetingTodoAggregate;

    private $session: MeetingSession;
    private $sessionNotes: MeetingNote[];
    private $sessionTodos: SessionTodoAggregate;
    private $sessionAgenda: MeetingAgenda;

    private $selectedSession: SelectedSession;


    constructor(
        private wdys: WdysMeetingService,
        private meetingService: WdysMeetingService,
        private todoService: WdysTodoService,
        private noteService: WdysMeetingNotesService,
        private sessionService: WdysSessionService,
        private createNoteService: WdysNotesService,

        private sessionDomain: SessionDomainService
    ) { }

    public openMeeting( meetingId: string , sessionId?: string,  options?: LoadOptions  ){
        if ( options?.onStart instanceof Function ){
            options?.onStart();
        }

        let loadMeeting = false;
        let loadSession = false;

        // sessionsload
        if ( sessionId ){
            if ( !this.$selectedSession || this.$selectedSession?.session?.meetingSessionId !== sessionId ){
                this.clearSession();
                loadSession = true;
            }
        } else {
            loadSession = false;
        }

        if ( !this.$meeting || this.$meeting?.id !== meetingId ){
            this.clear();
            loadMeeting = true;
        }

        console.log( loadMeeting + ' / ' + loadSession );
        if ( loadMeeting && loadSession ){
            this.wdys.apiMeetingQueryIdGet(  meetingId , 'response').subscribe(
                {
                    next: (m) => {
                        this.$meeting = m.body;
                        this.loadMeetingTodos();
                        if ( loadSession ){
                            this.selectSession(sessionId);
                            options?.onComplete();
                        } else {
                            options?.onComplete();
                        }
                    }
                }
            );

        } else if ( loadMeeting ){
            this.wdys.apiMeetingQueryIdGet(  meetingId , 'response').subscribe(
                {
                    next: (m) => {
                        this.$meeting = m.body;
                        this.loadMeetingTodos();
                        options?.onComplete();
                    }
                }
            );

        } else if ( loadSession ){
            this.selectSession( sessionId );
            options?.onComplete();
        }

    }


    public loadMeetingTodos(){
        this.todoService.apiWdysTodoQueryMeetingGet( this.$meeting.id , 'body' ).subscribe(
            {
                next: value => this.$meetingTodos = value
            }
        );
    }


    public clear() {
        this.$meeting = null;
        this.clearSession();
    }

    public clearSession(){
        this.$selectedSession = null;
    }

    public createNewSession( cmd: AddMeetingSessionCommand, onSuccess: () => void ){
        this.meetingService.apiMeetingSessionCmdNewPost( cmd , 'response').subscribe(
        {
            next: (value) => onSuccess()
        });
    }

    public cmd(): Commands {
        return new Commands(
          this,
          this.wdys, this.createNoteService, this.todoService
        );
    }

    private logAll(){
        console.log('---domain wdys----');
        console.log(this.$meeting);
        console.log(this.$selectedSession);
        console.log('---domain wdys----');
    }

    public selectSession( sessionId: string ){
        this.clearSession();
        this.logAll();
        this.$selectedSession = new SelectedSession();
        this.$selectedSession.session = this.$meeting.session.sessions.filter( s => s.meetingSessionId === sessionId )[0];
        this.loadSessionNotes( sessionId );
        this.loadSessionTodos( sessionId );
        this.loadSessionAgenda( this.meeting.id, sessionId );

        this.sessionDomain.openSession( this.meeting , sessionId );
    }

    public loadSessionNotes( meetingSessionId: string ){
        this.noteService.apiWdysMeetingnoteQuerySessionSessionIDGet( meetingSessionId , 'response' )
            .subscribe( (resp) => {
                this.$sessionNotes = resp.body;
            });
    }

    public loadSessionTodos(meetingSessionId: string) {
        this.todoService.apiWdysTodoQuerySessionGet( meetingSessionId , 'response' )
            .subscribe( {
                next : (resp) => this.$sessionTodos = resp.body
            } );
    }

    public loadSessionAgenda(meetingId: string, meetingSessionId: string) {
        this.sessionService.apiMeetingSessionAgendaMeetingIdSessionSessionIdGet( meetingId , meetingSessionId , 'response' )
            .subscribe( (resp) => {
                this.$sessionAgenda = resp.body;
            });
    }



    get meeting(): Meeting {
        return this.$meeting;
    }

    get session(): MeetingSession {
        if ( !this.$selectedSession ){
           return undefined;
        }
        return this.$selectedSession.session;
    }

    get selectedSession(){
        if ( !this.$selectedSession ){
            return undefined;
        }
        return this.$selectedSession;
    }

    get sessionTodos(): SessionTodoAggregate {
        return this.$sessionTodos;
    }

    get sessionNotes(): MeetingNote[]{
        return this.$sessionNotes;
    }

    get sessionAgenda(): MeetingAgenda {
        return this.$sessionAgenda;
    }

    get meetingTodos() {
        return this.$meetingTodos;
    }
}


export class SelectedSession{

    public session: MeetingSession;
    public sessionNotes: MeetingNote[];
    public sessionTodos: SessionTodoAggregate;
    public sessionAgenda: MeetingAgenda;

}


export class Commands {

    constructor(
        private domainService: MeetingDomainService,
        private wdys: WdysMeetingService,
        private createNoteService: WdysNotesService,

        private todo: WdysTodoService) {
        }


    public createSessionNote( cmd: CreateNewMeetingNoteCommand, onSuccess?: () => void ){
        cmd.meetingId = this.domainService.meeting.id;
        cmd.sessionId = this.domainService.selectedSession.session.meetingSessionId;
        this.createNoteService.apiWdysMeetingnoteCmdNewPost( cmd , 'response' ).subscribe(
            {
                next: () => {
                    if ( onSuccess ){
                        onSuccess();
                    }
                }
            }
        );
    }

}


export interface LoadOptions{
    onStart?: () => void;
    onComplete?: () => void;
    onFailure?: () => void;
}
