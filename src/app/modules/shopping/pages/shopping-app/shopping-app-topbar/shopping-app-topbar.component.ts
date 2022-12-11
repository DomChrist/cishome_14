import { Component, OnInit } from '@angular/core';
import {CisUser} from "../../../../../system/auth/authenticatedUser";
import {CisAuthService} from "../../../../../system/auth/cis-auth-service";

@Component({
  selector: 'app-shopping-app-topbar',
  templateUrl: './shopping-app-topbar.component.html',
  styleUrls: ['./shopping-app-topbar.component.scss']
})
export class ShoppingAppTopbarComponent implements OnInit {

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
