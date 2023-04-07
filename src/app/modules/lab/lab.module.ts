import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabDashboardComponent } from './pages/lab-dashboard/lab-dashboard.component';
import {LabRoutingModule} from "./lab.routes";
import { LabTopbarComponent } from './template/lab-topbar/lab-topbar.component';
import {AvatarModule} from "primeng/avatar";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import { LandingComponent } from './pages/landing/landing.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import {SkeletonModule} from "primeng/skeleton";
import {WdysModule} from "../wdys/wdys.module";
import { SpotifyAuthComponent } from './components/spotify-auth/spotify-auth.component';
import { SpotifyAuthCodeComponent } from './experiments/spotify/spotify-auth-code/spotify-auth-code.component';
import { SpotifyNextButtonComponent } from './experiments/spotify/spotify-next-button/spotify-next-button.component';
import { SpotifyCurrentlyPlayingComponent } from './experiments/spotify/spotify-currently-playing/spotify-currently-playing.component';
import { SpotifyCurrentlyStreamComponent } from './experiments/spotify/spotify-currently-playing/spotify-currently-stream/spotify-currently-stream.component';
import { SpotifyPlayerComponent } from './experiments/spotify/spotify-player/spotify-player.component';
import {ProgressBarModule} from "primeng/progressbar";
import { SpotifyProgressComponent } from './experiments/spotify/spotify-progress/spotify-progress.component';
import {ShoppingModule} from "../shopping/shopping.module";



@NgModule({
  declarations: [
    LabDashboardComponent,
    LabTopbarComponent,
    LandingComponent,
    CardUserComponent,
    SpotifyAuthComponent,
    SpotifyAuthCodeComponent,
    SpotifyNextButtonComponent,
    SpotifyCurrentlyPlayingComponent,
    SpotifyCurrentlyStreamComponent,
    SpotifyPlayerComponent,
    SpotifyProgressComponent
  ],
    imports: [
        CommonModule,
        LabRoutingModule,
        AvatarModule,
        CalendarModule,
        CardModule,
        DividerModule,
        SkeletonModule,
        WdysModule,
        ProgressBarModule,
        ShoppingModule
    ]
})
export class LabModule { }
