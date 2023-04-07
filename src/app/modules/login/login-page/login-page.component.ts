import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      this.jumpToLogin();
  }

    public jumpToLogin(): void {
        const redirect = location.protocol + '//' + location.host + '/authentication/response';
        const href = environment.cisHome.login + '&redirect_uri=' + redirect;
        location.href = href;
    }

}
