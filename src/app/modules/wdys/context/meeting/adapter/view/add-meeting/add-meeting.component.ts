import { Component, OnInit } from '@angular/core';
import {CreateMeetingCommand, CreateMeetingTodoCommand, Participant} from "../../../../../../../core/api/v1";
import {WdysMeetingRootService} from "../../../application/services/wdys-meeting-root.service";
import {ParticipantDomainService} from "../../../../participants/application/services/participant-domain.service";

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent implements OnInit {

  private $cmd: CreateMeetingCommand = {};
  public showCreateParticipantDialog = false;

  constructor(
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
      this.root.createMeeting( this.$cmd , () => {

      });
  }

    add(event: Array<Participant>) {
        this.$cmd.participants = event;
    }
}
