import {Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SessionStampTimer, SessionTimeTrackingService} from '../../../service/session-time-tracking.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-time-tracking-button',
  templateUrl: './time-tracking-button.component.html',
  styleUrls: ['./time-tracking-button.component.scss']
})
export class TimeTrackingButtonComponent implements OnInit, OnDestroy {

    @Input()
    public sessionId: string;
    @Input()
    public meetingId: string;


    @ViewChild('booking') booking: TemplateRef<any>;

    public timer: SessionStampTimer;
    private subscription: Subscription;

    constructor(private timerService: SessionTimeTrackingService) { }

    ngOnInit(): void {
        this.init();
        this.subscription = this.timerService.timerActionStream.subscribe( () => {
            this.init();
        });
    }

    ngOnDestroy() {
        if ( this.subscription ) {
            this.subscription.unsubscribe();
        }
    }

    public init(): void{
        this.timer = this.timerService.timeStamp(this.meetingId, this.sessionId);
    }

    public play(){
        this.init();
        if ( this.timer ){
            this.timer.play();
        } else {
            this.timer = this.timerService.start(this.meetingId, this.sessionId);
        }
    }

    public pause(){
        this.timerService.pause(this.timer);
    }

    public reset(){
        this.timer.reset();
    }

    public combinedTime(){
        if (!this.timer) {
            return 0;
        }
        return this.timer.combinedTime();
    }


    get running(){
        if ( this.timer && this.timer.running ) {
            return true;
        }
        return false;
    }

    public diff(){
        if ( !this.timer ) {
            return '00h 00m 00s';
        }
        return this.timer.diff();
    }


}
