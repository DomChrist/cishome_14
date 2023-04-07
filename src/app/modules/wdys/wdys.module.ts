import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WdysWidgetComponent } from './wdys-widget/wdys-widget.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { WdysDashboardComponent } from './pages/wdys-dashboard/wdys-dashboard.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PanelModule} from 'primeng/panel';
import {ProgressBarModule} from 'primeng/progressbar';
import {TimelineModule} from 'primeng/timeline';
import { WdysAppComponent } from './pages/wdys-app/wdys-app.component';
import {WdysRoutingModule} from './wdys.routes';
import { WdysMeetingComponent } from './context/meeting/adapter/view/wdys-meeting/wdys-meeting.component';
import {SkeletonModule} from 'primeng/skeleton';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DividerModule} from 'primeng/divider';
import {ChipModule} from 'primeng/chip';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {AvatarModule} from 'primeng/avatar';
import { WdysTodoMeetingComponent } from './context/meeting/adapter/components/wdys-todo-meeting/wdys-todo-meeting.component';
import {TableModule} from 'primeng/table';
import {SpeedDialModule} from 'primeng/speeddial';
import { MeetingSessionOverviewComponent } from './context/meeting/adapter/view/meeting-session-overview/meeting-session-overview.component';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import { ShowSessionNotesComponent } from './context/meeting/adapter/components/show-session-notes/show-session-notes.component';
import { MeetingAgendaOverviewComponent } from './context/meeting/adapter/components/meeting-agenda-overview/meeting-agenda-overview.component';
import {CheckboxModule} from 'primeng/checkbox';
import { SessionTodoComponent } from './context/meeting/adapter/components/session-todo/session-todo.component';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {EditorModule} from "primeng/editor";
import { ParticipantComponent } from './context/meeting/adapter/view/participant/participant.component';
import {SidebarModule} from "primeng/sidebar";
import { ParticipantPageComponent } from './context/participants/adapter/pages/participant-page/participant-page.component';
import { CreateParticipantDialogComponent } from './context/participants/adapter/dialogs/create-participant-dialog/create-participant-dialog.component';
import { AddMeetingComponent } from './context/meeting/adapter/view/add-meeting/add-meeting.component';
import { SearchParticipantDialogComponent } from './context/participants/adapter/dialogs/search-participant-dialog/search-participant-dialog.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextareaModule} from "primeng/inputtextarea";
import { AddSessionComponent } from './context/meeting/adapter/view/add-session/add-session.component';
import {MessagesModule} from "primeng/messages";
import { CreateSessionNoteComponent } from './context/meeting/adapter/components/create-session-note/create-session-note.component';
import { WdysCollaboratingComponent } from './context/collaborate/wdys-collaborating/wdys-collaborating.component';
import { WdysShareSessionComponent } from './context/meetingsession/adapter/components/wdys-share-session/wdys-share-session.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {AccordionModule} from "primeng/accordion";
import { ParticipantDetailPageComponent } from './context/participants/adapter/pages/participant-detail-page/participant-detail-page.component';
import { ParticipantNotesComponent } from './context/participants/adapter/pages/participant-detail-page/participant-notes/participant-notes.component';
import { ParticipantSessionComponent } from './context/participants/adapter/pages/participant-detail-page/participant-session/participant-session.component';
import { TimeTrackingButtonComponent } from './context/timetracking/view/components/time-tracking-button/time-tracking-button.component';
import { TimeTrackingComponent } from './context/timetracking/view/page/time-tracking/time-tracking.component';
import { RunningTimeTrackerComponent } from './context/timetracking/view/components/running-time-tracker/running-time-tracker.component';



@NgModule({
  declarations: [
    WdysWidgetComponent,
    WdysDashboardComponent,
    WdysAppComponent,
    WdysMeetingComponent,
    WdysTodoMeetingComponent,
    MeetingSessionOverviewComponent,
    ShowSessionNotesComponent,
    MeetingAgendaOverviewComponent,
    SessionTodoComponent,
    ParticipantComponent,
    ParticipantPageComponent,
    CreateParticipantDialogComponent,
    AddMeetingComponent,
    SearchParticipantDialogComponent,
    AddSessionComponent,
    CreateSessionNoteComponent,
    WdysCollaboratingComponent,
    WdysShareSessionComponent,
    ParticipantDetailPageComponent,
    ParticipantNotesComponent,
    ParticipantSessionComponent,
    TimeTrackingButtonComponent,
    TimeTrackingComponent,
    RunningTimeTrackerComponent
  ],
    imports: [
        WdysRoutingModule,
        InputTextareaModule,
        CommonModule,
        InputTextModule,
        ButtonModule,
        CardModule,
        ButtonModule,
        SplitButtonModule,
        PanelModule,
        ProgressBarModule,
        TimelineModule,
        SkeletonModule,
        BreadcrumbModule,
        DividerModule,
        ChipModule,
        AvatarGroupModule,
        AvatarModule,
        TableModule,
        SpeedDialModule,
        TabViewModule,
        ToastModule,
        DialogModule,
        CheckboxModule,
        CalendarModule,
        FormsModule,
        EditorModule,
        SidebarModule,
        AutoCompleteModule,
        MessagesModule,
        OverlayPanelModule,
        AccordionModule
    ],
  exports: [WdysWidgetComponent]
})
export class WdysModule { }
