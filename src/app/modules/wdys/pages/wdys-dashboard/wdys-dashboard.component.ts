import { Component, OnInit } from '@angular/core';
import {WdysDashboardService} from "../../services/dashboard/wdys-dashboard.service";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {MeetingTodo, OverDueJpaEntity} from "../../../../core/api/v1";
import {MeetingDomainService} from "../../context/meeting/application/services/meeting-domain.service";

@Component({
  selector: 'app-wdys-dashboard',
  templateUrl: './wdys-dashboard.component.html',
  styleUrls: ['./wdys-dashboard.component.scss']
})
export class WdysDashboardComponent implements OnInit {

  private $commandItems: MenuItem[];


  constructor( private service: WdysDashboardService,
               private domain: MeetingDomainService,
               private routing: Router) {

  }

  ngOnInit(): void {
      this.$commandItems = [
          {label: 'Participants', icon: 'pi pi-users', routerLink: ['/wdys','participant']},
          {label: 'Delete', icon: 'pi pi-times', command: () => {}},
          {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
          {separator: true},
          {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
      ];
  }


  public newMeetingRouting(){
      this.routing.navigate( ['/wdys','add','meeting'] );
  }

    public loadMeetingFromTodo( m: OverDueJpaEntity ){

          this.domain.openMeeting( m.meeting , m.session , {
              onComplete: () => {
                  this.routing.navigate( ['/wdys/meeting/view', m.meeting, 'session', m.session ] , {
                      queryParams: {
                          todo : m.id
                      }
                  });
              }
          });

    }

  get communications(){
      return this.service.mostCommunications;
  }

  get lastNotesList(){
      return this.service.lastNotes;
  }

  get lastMeetings(){
      return this.service.lastMeetings;
  }

  get commandItems(){
      return this.$commandItems;
  }

  get count(){
      return this.service.count;
  }

  get todos(){
      return this.service.overdue;
  }

}
