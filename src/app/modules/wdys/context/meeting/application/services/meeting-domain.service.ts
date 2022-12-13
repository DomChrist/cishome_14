import { Injectable } from '@angular/core';
import {
    Meeting, MeetingAgenda,
    MeetingNote,
    MeetingSession, MeetingTodoAggregate,
    SessionTodoAggregate,
    WdysMeetingService, WdysSessionService,
    WdysTodoService
} from '../../../../../../core/api/v1';
import {WdysMeetingNotesService} from '../../../../../../core/api/v1/api/wdysMeetingNotes.service';

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
        private sessionService: WdysSessionService
    ) { }

    public openMeeting( meetingId: string , onComplete?: () => void ){
        this.clear();
        this.wdys.apiMeetingQueryIdGet(  meetingId , 'response').subscribe(
            {
                next: (m) => {
                    this.$meeting = m.body;
                    this.loadMeetingTodos();
                    if ( onComplete !== undefined ){
                        onComplete();
                    }
                }
            }
        );
    }

    public open( meeting: string , session: string ){
        this.clear();
        this.openMeeting( meeting , () => {
            this.selectSession( session );
        });
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

    private clearSession(){
        this.$selectedSession = null;
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
        if( !this.$selectedSession ){
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
