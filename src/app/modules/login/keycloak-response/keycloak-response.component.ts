import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-keycloak-response',
  templateUrl: './keycloak-response.component.html',
  styleUrls: ['./keycloak-response.component.scss']
})
export class KeycloakResponseComponent implements OnInit {

  public plainToken: string;
  public part1: string;
  public part2: string;
  public part3: string;

  constructor( private http: HttpClient,
               private route: ActivatedRoute) { }

  ngOnInit(): void {

      let code = this.route.snapshot.queryParamMap.get('code');


      const keycloak = location.protocol + '//' + 'localhost:8082' + '/auth/realms/' + environment.keycloak.realm + '/protocol/openid-connect/token';
      const redirect = location.protocol + '//' + location.host + '/auth/response';

      let headers = new HttpHeaders();
        headers = headers.append('Content-Type' , 'application/x-www-form-urlencoded');

      let params = new URLSearchParams();
      params.set('code',code);
      params.set('grant_type' , 'authorization_code');
      params.set('client_id' , 'cishome' );
      params.set('client_secret', '3054de8f-bec7-4d4e-9540-eac80157da02' );
      params.set('redirect_uri' , redirect );

      this.http.post( keycloak, params , {headers : headers} ).subscribe( {
          next: value => {
              console.log(value);
              alert(value['access_token']);
              this.plainToken = value['access_token'];
              let split = this.plainToken.split('.');

              this.part1 = atob(split[0]);
              this.part2 = atob(split[1]);
              this.part3 = split[2];
          }
      });

  }



}
