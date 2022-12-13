import { Injectable } from '@angular/core';
import {
    LastNotesJpaEntity,
    MeetingDashboardCountJpaEntity, MeetingDashboardJpaEntity,
    MostCommunicativeParticipantJpaEntity,
    OverDueJpaEntity
} from '../../../../core/api/v1';
import {MeetingService} from '../../../../core/api/v1/api/meeting.service';

@Injectable({
  providedIn: 'root'
})
export class WdysDashboardService {

  private $counting: MeetingDashboardCountJpaEntity;
  private $overdue: OverDueJpaEntity[];
  private $lastNotes: LastNotesJpaEntity[];
  private $lastMeeting: MeetingDashboardJpaEntity[];
  private $mostCommunications: MostCommunicativeParticipantJpaEntity[];

  constructor( private meetingService: MeetingService) {
      this.meetingService.apiMeetingDashboardQueryCountingsGet('body').subscribe(
          {
              next: (c) => this.$counting = c
          }
      );

      this.meetingService.apiMeetingDashboardQueryOverdueGet('body').subscribe(
          {
              next: (o) => this.$overdue = o
          }
      );

      this.meetingService.apiMeetingDashboardQueryLastNotesGet('body').subscribe(
          {
              next: (n ) => this.$lastNotes = n
          }
      );

      this.meetingService.apiMeetingDashboardQueryLastEditedMeetingsGet('body').subscribe(
          {
              next: (l) => this.$lastMeeting = l
          }
      );

      this.meetingService.apiMeetingDashboardQueryMostCommunicationsGet('body').subscribe( {
          next: (c) => this.$mostCommunications = c
      } );

  }



  get count() : MeetingDashboardCountJpaEntity{
      return this.$counting;
  }

  get overdue(): OverDueJpaEntity[]{
      return this.$overdue;
  }

  get lastNotes(){
      return this.$lastNotes;
  }

  get lastMeetings(){
      return this.$lastMeeting;
  }

    get mostCommunications(){
      return this.$mostCommunications;
    }


}
