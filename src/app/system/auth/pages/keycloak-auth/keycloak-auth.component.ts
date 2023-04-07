import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CisAuthService} from "../../cis-auth-service";

@Component({
  selector: 'app-keycloak-auth',
  templateUrl: './keycloak-auth.component.html',
  styleUrls: ['./keycloak-auth.component.scss']
})
export class KeycloakAuthComponent implements OnInit {

    public loggedIn = false;
    public text: string;
    public value = 0;
    public error: ErrorResponse = undefined;

    constructor( private routes: ActivatedRoute,
                 private router: Router,
                 private auth: CisAuthService) { }

  ngOnInit(): void {

        this.codeFromUri();

  }

  private codeFromUri(){
      this.routes.queryParamMap.subscribe( (m) => {
          const code = m.get('code');
          if ( code ){
              this.handleCode(code);
          } else {
              this.error = new ErrorResponse();
              this.error.error = 'X101';
              this.error.errorText = 'Missing access code';
              this.text = 'Loginpage need a missing code';
          }
      });
  }

    private handleCode( code: string){
        this.text = 'code received';
        this.countTo(30);

        this.withDelay( 2000 , () => {
            this.auth.oAuth( code );
        });

    }

    private withDelay( delay: number , func:() => void ){
        window.setTimeout( () => func() , delay );
    }

    private countTo( n: number ) {
        console.log('count from ' + this.value + 'to ' + n);
        if (this.value >= n) {
            this.value = n;
        } else {
            window.setTimeout(() => {
                this.value++;
                this.countTo(n);
            }, 10);
        }
    }

}

class ErrorResponse{
    error: string;
    errorText: string;
    text: string;
}
