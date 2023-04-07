import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeycloakAuthComponent } from './pages/keycloak-auth/keycloak-auth.component';
import {AuthRoutingModule} from "./auth.routes";



@NgModule({
  declarations: [
    KeycloakAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
