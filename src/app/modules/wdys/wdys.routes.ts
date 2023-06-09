import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {AuthGuard} from '../../system/auth/auth.guard';
import {WdysAppComponent} from './pages/wdys-app/wdys-app.component';
import {WdysDashboardComponent} from './pages/wdys-dashboard/wdys-dashboard.component';
import {WdysMeetingComponent} from "./context/meeting/adapter/view/wdys-meeting/wdys-meeting.component";
import {
    MeetingSessionOverviewComponent
} from "./context/meeting/adapter/view/meeting-session-overview/meeting-session-overview.component";
import {
    ParticipantPageComponent
} from "./context/participants/adapter/pages/participant-page/participant-page.component";
import {AddMeetingComponent} from "./context/meeting/adapter/view/add-meeting/add-meeting.component";
import {AddSessionComponent} from "./context/meeting/adapter/view/add-session/add-session.component";
import {WdysCollaboratingComponent} from "./context/collaborate/wdys-collaborating/wdys-collaborating.component";
import {
    ParticipantDetailPageComponent
} from "./context/participants/adapter/pages/participant-detail-page/participant-detail-page.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: WdysAppComponent , canActivate: [AuthGuard] , children: [
                    {path: '' , component: WdysDashboardComponent},
                    {path: 'add/meeting' , component: AddMeetingComponent},
                    {path: 'participant' , component: ParticipantPageComponent},
                    {path: 'participant/detail' , component: ParticipantDetailPageComponent},
                    {path: 'meeting/view/:id' , component: WdysMeetingComponent},
                    {path: 'meeting/view/:id/add/session' , component: AddSessionComponent},
                    {path: 'meeting/view/:id/session/:session' , component: MeetingSessionOverviewComponent}
                ]
            },
            {path: 'collaboration/session/:session', component: WdysCollaboratingComponent}
        ])
    ],
    exports: [RouterModule]
})
export class WdysRoutingModule {
}
