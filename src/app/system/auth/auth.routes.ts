import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {KeycloakAuthComponent} from './pages/keycloak-auth/keycloak-auth.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: KeycloakAuthComponent}
        ])
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
