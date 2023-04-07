import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {LoginPageComponent} from "./login-page/login-page.component";
import {KeycloakResponseComponent} from "./keycloak-response/keycloak-response.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: LoginPageComponent},
            { path: 'response', component: KeycloakResponseComponent}
        ])
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule {
}
