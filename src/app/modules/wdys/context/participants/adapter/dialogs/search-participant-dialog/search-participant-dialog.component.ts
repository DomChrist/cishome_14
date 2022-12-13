import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Participant} from "../../../../../../../core/api/v1";
import {ParticipantService} from "../../../../../../../core/api/v1/api/participant.service";
import {ParticipantDomainService} from "../../../application/services/participant-domain.service";

@Component({
  selector: 'app-search-participant-dialog',
  templateUrl: './search-participant-dialog.component.html',
  styleUrls: ['./search-participant-dialog.component.scss']
})
export class SearchParticipantDialogComponent implements OnInit {

    public participantList = new Array<Participant>();

    private _selectedParticipants = new Array<Participant>();

    @Output("participants")
    public participantsChange: EventEmitter<Array<Participant>> = new EventEmitter<Array<Participant>>();



    constructor(
        private participantService: ParticipantDomainService
    ) { }

    ngOnInit(): void {
        this.participantList = this.participantService.participants;
    }

    public search( event ){
        console.log(event);
        console.log(event.data);
        this.participantList = this.participantService.participants
            .filter( p => p.fullName.includes(event.query) );
    }


    get selectedParticipants(): Participant[] {
        return this._selectedParticipants;
    }

    set selectedParticipants(value: Participant[]) {
        this._selectedParticipants = value;
        this.participantsChange.emit( value );
    }

    public push(event){
        this.participantsChange.emit( this._selectedParticipants );
    }

    public firstLetter( l: string ){
        return l.charAt(0).toUpperCase();
    }

    @Input('currentParticipants')
    set currentParticipants( p: Array<Participant> ){
        this._selectedParticipants = p;
    }


}
