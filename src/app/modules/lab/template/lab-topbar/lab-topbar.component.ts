import { Component, OnInit } from '@angular/core';
import {CisAuthService} from '../../../../system/auth/cis-auth-service';
import {CisUser} from "../../../../system/auth/authenticatedUser";
import {$u} from "codelyzer/angular/styles/chars";

@Component({
  selector: 'app-lab-topbar',
  templateUrl: './lab-topbar.component.html',
  styleUrls: ['./lab-topbar.component.scss']
})
export class LabTopbarComponent implements OnInit {

  private $user: CisUser;
  public activeTopbarItem: HTMLLIElement;

  constructor( public auth: CisAuthService) { }

  ngOnInit(): void {
      this.auth.isAuthenticated();
      this.$user = this.auth.securityIdentity.user;
  }

    initial() {
        return undefined;
    }

    public logout(){
        this.auth.logout();
    }

    get user(){
      return this.$user;
    }

    onTopbarItemClick($event: MouseEvent, item: HTMLLIElement) {
        if( this.activeTopbarItem === item ){
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = item;
        }
        $event.preventDefault();
    }
}
