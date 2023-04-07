import { Component, OnInit } from '@angular/core';
import {PresentationModeResponse, WdysCollaborationService} from "../../../../../core/api/v1";
import {ActivatedRoute} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {webSocket} from "rxjs/webSocket";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-wdys-collaborating',
  templateUrl: './wdys-collaborating.component.html',
  styleUrls: ['./wdys-collaborating.component.scss']
})
export class WdysCollaboratingComponent implements OnInit {

  private $code: string;
  private $session: string;
  private $valid = false;

  private $response: HttpResponse<PresentationModeResponse>;

  constructor(
      private collaborationService: WdysCollaborationService,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe( (map) => {
         this.$session = map.get('session');
      });
  }

  get isValid(){
      return this.$valid;
  }

  public load(){
        this.collaborationService.apiMeetingCollaborationSessionSessionGet( this.$session , this.code , 'response' ).subscribe(
            {
                next: (resp) => {
                    this.$valid = true;
                    this.$response = resp;
                    console.log( this.$response );
                    this.listen();
                }
            }
        );
  }

    listen(){
        const path = environment.cisHome.socket + 'meeting/collaboration/change/' + this.$session;
        const subject = webSocket(path);
        subject.subscribe( (data) => {
            console.log(data);
            alert(data);
            this.load();
        } );
    }

  get code(): string{
      return this.$code;
  }

  set code( c: string){
    this.$code = c;
  }

  get response(){
      return this.$response?.body;
  }

}
