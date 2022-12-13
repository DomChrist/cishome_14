import {Component, Input, OnInit} from '@angular/core';
import {WdysMeetingRootService} from '../../../application/services/wdys-meeting-root.service';
import {MeetingAgenda} from '../../../../../../../core/api/v1';

@Component({
  selector: 'app-meeting-agenda-overview',
  templateUrl: './meeting-agenda-overview.component.html',
  styleUrls: ['./meeting-agenda-overview.component.scss']
})
export class MeetingAgendaOverviewComponent implements OnInit {

  private $meetingId: string;
  private $sessionId: string;

  public loadFinished = false;
  public showNewAgendaDialog = false;

  private $agenda: MeetingAgenda;

  constructor( private root: WdysMeetingRootService) { }

  ngOnInit(): void {
      this.root.loadAgenda( this.$meetingId , this.$sessionId ).subscribe(
          {
              next: (resp) => {
                  this.$agenda = resp.body;
                  this.loadFinished = true;
              }
          }
      );
  }


  @Input()
  set meetingId( meeting: string ){
        this.$meetingId = meeting;
  }

  @Input()
  set sessionId( session: string ){
      this.$sessionId = session;
  }

  get meetingAgenda(){
      return this.$agenda;
  }

  get newAgendaCmd(){
      return null;
  }

    showOpenNewAgendaCommand() {

    }

    saveNewAgenda() {

    }
}
