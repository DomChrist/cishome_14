import { Component, OnInit } from '@angular/core';
import {ParticipantDetailPageComponent} from "../participant-detail-page.component";

@Component({
  selector: 'app-participant-notes',
  templateUrl: './participant-notes.component.html',
  styleUrls: ['./participant-notes.component.scss']
})
export class ParticipantNotesComponent implements OnInit {

  constructor( private root: ParticipantDetailPageComponent) { }

  ngOnInit(): void {



  }

}
