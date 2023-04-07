import { Component, OnInit } from '@angular/core';
import {CisAuthService} from "../../../../system/auth/cis-auth-service";
import {CisUser} from "../../../../system/auth/authenticatedUser";

@Component({
  selector: 'app-lab-dashboard',
  templateUrl: './lab-dashboard.component.html',
  styleUrls: ['./lab-dashboard.component.scss']
})
export class LabDashboardComponent implements OnInit {

    public user: CisUser;

  constructor( private auth: CisAuthService) { }

  ngOnInit(): void {
      this.auth.isAuthenticated()
      this.user = this.auth.securityIdentity.user;
  }

}
