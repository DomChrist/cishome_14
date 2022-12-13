import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MenuItem} from "primeng/api";
import {WdysMeetingRootService} from '../../../application/services/wdys-meeting-root.service';
import {MeetingService} from "../../../../../../../core/api/v1/api/meeting.service";
import {Meeting, MeetingSession, MeetingTodoAggregate, WdysMeetingService} from "../../../../../../../core/api/v1";
import {MeetingDomainService} from "../../../application/services/meeting-domain.service";

@Component({
  selector: 'app-wdys-meeting',
  templateUrl: './wdys-meeting.component.html',
  styleUrls: ['./wdys-meeting.component.scss']
})
export class WdysMeetingComponent implements OnInit {

  private $meeting: Meeting;

  public items: MenuItem[];

  public showNewMeetingDialog: boolean = false;
  public show_add_participants: boolean = false;
  public commandItems: MenuItem[];


  constructor(
      private meetingService: MeetingService,
      private wdys: WdysMeetingService,
      private root: WdysMeetingRootService,
      private domain: MeetingDomainService,
      private routing: Router,
      private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.router.paramMap.subscribe( (map) => {
          const  meetingId = map.get('id');
          this.domain.openMeeting( meetingId );
          this.initCommandItems( meetingId );
      });
      // this.initCommandItems();
      // this.domain.loadMeetingTodos();
  }

    private initCommandItems( meetingId: string ){
        this.commandItems = [
            {
                tooltip : 'add new Session',
                icon: 'pi pi-plus',
                command: () => {
                    this.showNewMeetingDialog = !this.showNewMeetingDialog
                    //this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltip : 'add new Session',
                icon: 'pi pi-refresh',
                command: () => {
                    //this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltip : 'add new Session',
                icon: 'pi pi-trash',
                command: () => {
                    //this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                tooltip : 'Manage participants',
                icon: 'pi pi-users',
                command: () => {
                    this.show_add_participants = !this.show_add_participants
                }
            },
            {
                tooltip : 'add new Session',
                icon: 'pi pi-external-link',
                url: 'http://angular.io'

            }
        ];

        this.items = [
            {label: 'DASHBOARD', routerLink: ['/wdys']},
            {label: 'MEETING', routerLink: ['/wdys/meeting/view', meetingId ]}
        ];
    }

  public load( id: string ){
        this.root.load(id);
  }

  public openSession( sessionId: string ){
      this.domain.selectSession( sessionId );
      this.routing.navigate( ['wdys/meeting/view', this.domain.meeting.id, 'session', sessionId] );
  }

  get meeting(){
      return this.domain.meeting;
  }

  get meetingTodos(): MeetingTodoAggregate {
      return this.domain.meetingTodos;
  }


    participants(s: MeetingSession) {
        return s.participants;
    }

}
