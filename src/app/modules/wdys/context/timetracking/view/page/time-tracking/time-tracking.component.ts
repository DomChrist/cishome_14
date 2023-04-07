import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MeetingSessionTimeBooking} from "../../../../../../../core/api/v1";
import {Subscription} from "rxjs";
import {SessionTimeTrackingService} from "../../../service/session-time-tracking.service";

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss']
})
export class TimeTrackingComponent implements OnInit, OnDestroy {


    @Input()
    public sessionId: string;
    @Input()
    public meetingId: string;

    public description: string;

    public meetingTimeAggregate: MeetingSessionTimeBooking;
    private subscription: Subscription;

    constructor(private timeTracking: SessionTimeTrackingService) { }

    ngOnInit(): void {
        this.subscription = this.timeTracking.timerActionStream.subscribe( () => {
            this.init();
        });
        this.init();
    }

    ngOnDestroy(): void {
        if ( this.subscription ) {
            this.subscription.unsubscribe();
        }
    }


    private init(){
        this.timeTracking.loadBySession(this.sessionId , (a) => {
            this.meetingTimeAggregate = a;
        });
    }

    public book(){
        const stampTimer = this.timeTracking.timeStamp(this.meetingId, this.sessionId);
        this.timeTracking.bookTime( this.description , stampTimer , () => {
            this.description = null;
        });
    }




}
