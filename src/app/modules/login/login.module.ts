import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {LoginRoutingModule} from "./login.routes";
import { KeycloakResponseComponent } from './keycloak-response/keycloak-response.component';
import {PanelModule} from "primeng/panel";



@NgModule({
  declarations: [
    LoginPageComponent,
    KeycloakResponseComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        PanelModule
    ]
})
export class LoginModule { }
