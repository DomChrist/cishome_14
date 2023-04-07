import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MeetingProjection, Participant, WdysMeetingService} from '../../../../core/api/v1';
import {MeetingDomainService} from '../../context/meeting/application/services/meeting-domain.service';
import {ParticipantDomainService} from "../../context/participants/application/services/participant-domain.service";

@Component({
  selector: 'app-wdys-app',
  templateUrl: './wdys-app.component.html',
  styleUrls: ['./wdys-app.component.scss']
})
export class WdysAppComponent implements OnInit {

  private $menuVisible = false;
  public toggleCreateParticipantDialog = false;

  @ViewChild('searchLine')
  private searchLine: ElementRef<HTMLInputElement>;

  public menu;

  public actions = [];

  public searchResponse: MeetingProjection[];

  public result: MeetingProjection[];
  public actionResults;
  public participantResult: Participant[];

  constructor(
      private routing: Router,
      private search: WdysMeetingService,
      private domain: MeetingDomainService,

      private participantSearch: ParticipantDomainService

  ) {
      this.actions = [
          { label: 'Create Meeting' , search: 'create meeting' , type: 'page', action: () => this.routing.navigate(['/wdys/meeting/add']) },
          { label: 'Create Participant' , search: 'create participant teilnehmer' , type: 'dialog' , action: () => this.toggleCreateParticipantDialog = true }
      ];
  }

  ngOnInit(): void {
      this.menu = [
          { label: 'Meetings', icon: 'pi-calendar' , action: () => this.toMeetings() },
          { label: 'Participants', icon: 'pi-users' , action: () => this.toParticipants() }
      ];

      this.actions = [
          { label: 'Create Meeting' , search: 'create meeting' , action: () => this.routing.navigate(['/wdys/add/meeting']) },
          { label: 'Create Participant' , search: 'create participant teilnehmer' , action: () => this.toggleCreateParticipantDialog = true }
      ];

  }

    toggleMenu() {
        this.$menuVisible = !this.$menuVisible;
    }


    startSearch(event, searchLine: string){
        this.searchResponse = null;
        this.actionResults = null;

        this.search.apiMeetingQuerySearchGet(searchLine , 'response').subscribe( {
            next: (resp) => {
                this.result = resp.body;
            }
        });

        console.log(this.actions);



        this.actionResults = this.actions.filter( a => {
            console.log(a.search);
            const s: string = a.search;
            return s.toLowerCase().includes( searchLine.toLowerCase());
        });
        console.log(this.actionResults);

        this.participantResult = this.participantSearch.participants
            .filter( p => p.fullName.toLowerCase().includes(searchLine) );

    }

    openMeeting(id: string) {

      console.log( this.searchLine.nativeElement.value);

      this.domain.openMeeting( id , undefined , {
            onComplete : () => {
                this.searchLine.nativeElement.value = '';
                this.routing.navigate(['/wdys/meeting/view', id] );
            }
        });
    }

    startAction( action: () => void ){
        this.searchLine.nativeElement.value = '';
        action();
    }



    get menuVisible(){
      return this.$menuVisible;
    }

    set menuVisible( b: boolean){
      this.$menuVisible = b;
    }

    toParticipants() {
        this.routing.navigate( ['wdys', 'participant'] );
        this.$menuVisible = false;
    }

    toMeetings() {
        this.routing.navigate( ['wdys'] );
        this.$menuVisible = false;
    }


}

