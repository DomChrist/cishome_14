import { Component, OnInit } from '@angular/core';
import {CreateMeetingCommand, CreateMeetingTodoCommand, Participant} from "../../../../../../../core/api/v1";
import {WdysMeetingRootService} from "../../../application/services/wdys-meeting-root.service";
import {ParticipantDomainService} from "../../../../participants/application/services/participant-domain.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent implements OnInit {

  private $cmd: CreateMeetingCommand = {};
  public showCreateParticipantDialog = false;

  public step = 1;

  constructor(
      private router: Router,
      private root: WdysMeetingRootService,
      private participantService: ParticipantDomainService
  ) { }

  ngOnInit(): void {
  }

  get participants(){
      return this.participantService.participants;
  }

  get cmd(){
    return this.$cmd;
  }

  public save(){
      this.root.createMeeting( this.$cmd , (body) => {
            this.router.navigate( ['/wdys/meeting/view' , body.id ] );
      });
  }

  public back(){
      this.router.navigate( ['/wdys'] );
  }

    add(event: Array<Participant>) {
        this.$cmd.participants = event;
    }


    get subject(){
      if( !this.cmd || !this.cmd.subject ){
          return 'SUBJECT';
      } else {
          return this.cmd.subject;
      }
    }

    get date(){
      if( this.cmd && this.cmd.meetingTime ){
          return this.$cmd.meetingTime;
      }
      return 'DATE';
    }
}
