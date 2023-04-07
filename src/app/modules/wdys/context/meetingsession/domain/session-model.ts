import {MeetingNote, MeetingSession, MeetingTodo, SessionTodoAggregate} from "../../../../../core/api/v1";

export class SessionModel {





}



export class SessionAggregate{

    private root: MeetingSession;
    private $todos: Array<MeetingTodo>;
    private $notes: Array<MeetingNote>;

    private $collaborationCode: string = undefined;


    constructor( s: MeetingSession ) {
        this.root = s;
    }



    addTodos(todos: Array<MeetingTodo>) {
        this.$todos = todos;
    }

    addNotes(notes: Array<MeetingNote>) {
        this.$notes = notes;
    }

    activateSharing( code: string ) {
        this.$collaborationCode = code;
    }

    get id(){
        return this.root.meetingSessionId;
    }

    get meeting(){
        return this.root.meetingId;
    }

    get todos(){
        return this.$todos;
    }

    get notes(){
        return this.$notes;
    }

    get collaborationCode(){
        return this.$collaborationCode;
    }


}


