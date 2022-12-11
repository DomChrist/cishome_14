import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {LabDashboardComponent} from './pages/lab-dashboard/lab-dashboard.component';
import {LandingComponent} from './pages/landing/landing.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {SpotifyAuthComponent} from "./components/spotify-auth/spotify-auth.component";
import {SpotifyAuthCodeComponent} from "./experiments/spotify/spotify-auth-code/spotify-auth-code.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: LabDashboardComponent , canActivate: [AuthGuard]},
            { path: 'landing', component: LandingComponent},
            { path: 'spotify/auth' , component: SpotifyAuthCodeComponent }
        ])
    ],
    exports: [RouterModule]
})
export class LabRoutingModule {
}
