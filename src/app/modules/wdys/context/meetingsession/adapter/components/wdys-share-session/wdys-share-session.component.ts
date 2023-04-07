import {Component, Input, OnInit} from '@angular/core';
import {MeetingDomainService} from "../../../../meeting/application/services/meeting-domain.service";
import {SessionDomainService} from "../../../application/session-domain.service";

@Component({
  selector: 'app-wdys-share-session',
  templateUrl: './wdys-share-session.component.html',
  styleUrls: ['./wdys-share-session.component.scss']
})
export class WdysShareSessionComponent implements OnInit {


    constructor( private sessionDomain: SessionDomainService) { }

    ngOnInit(): void {
        this.load();
    }

    get code(){
        if (!this.collaboration) return '';
        return this.sessionDomain.session.collaborationCode;
    }

    get link(){
        const uri = location.protocol + '//' + location.hostname + ':' + location.port + '/wdys/collaboration/session/' + this.sessionDomain.session.id;
        return uri;
    }


    private load(){

    }

    public activate(){
        this.sessionDomain.collaboration.start();
    }

    public copy( text: string ){
        navigator.clipboard.writeText( text );
        //this.message.add( {severity:'success' , summary:'copied'} );
    }

    get collaboration(){
        return this.sessionDomain.session.collaborationCode;
    }

}
