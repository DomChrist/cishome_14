import { Component, OnInit } from '@angular/core';
import {ParticipantDomainService} from "../../../application/services/participant-domain.service";

@Component({
  selector: 'app-participant-page',
  templateUrl: './participant-page.component.html',
  styleUrls: ['./participant-page.component.scss']
})
export class ParticipantPageComponent implements OnInit {

  public show_create_dialog = false;

  constructor(
      private domain: ParticipantDomainService
  ) { }

  ngOnInit(): void {
  }

  get participants(){
      return this.domain.participants;
  }

}
