import { Component, OnInit } from '@angular/core';
import {MeetingDomainService} from "../../../application/services/meeting-domain.service";
import {AddMeetingSessionCommand, Participant} from "../../../../../../../core/api/v1";

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {

  public cmd: AddMeetingSessionCommand;
  public participantsFromMeeting = false;

  public meetingDate: Date;

  constructor( private domain: MeetingDomainService) { }

  ngOnInit(): void {
      this.cmd = {};
      this.meetingDate = new Date();
  }

  public save(){

      if( this.participantsFromMeeting ){
          this.cmd.participants = this.domain.meeting.participants;
      }

      this.cmd.meetingDateString = this.toDateString( this.meetingDate );
      this.cmd.meetingId = this.domain.meeting.id;

      this.domain.createNewSession( this.cmd , () => {

      });

  }

    handleParticipants(event: Participant[]) {
        this.cmd.participants = event;
    }

    private toDateString( date: Date ){

        let day   = date.getDate() >= 10 ? date.getDate().toString() : '0' + date.getDate().toString();
        let m     = date.getMonth() + 1;
        let month = m >= 10 ? m : '0' + m;
        let year  = date.getFullYear();

        console.log( day );
        return year+'-'+month+"-"+day;
    }


    get firstDate(): Date{
        if( !this.domain.meeting.dateRange ) return null;
        return new Date(this.domain.meeting.dateRange.firstDate);
    }
}
