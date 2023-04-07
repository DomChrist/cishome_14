import {Component, OnInit, ViewChild} from '@angular/core';
import {ParticipantDomainService} from "../../../application/services/participant-domain.service";
import {Participant} from "../../../../../../../core/api/v1";
import {Router} from "@angular/router";
import {ParticipantDetailPageComponent} from "../participant-detail-page/participant-detail-page.component";

@Component({
  selector: 'app-participant-page',
  templateUrl: './participant-page.component.html',
  styleUrls: ['./participant-page.component.scss']
})
export class ParticipantPageComponent implements OnInit {

  public show_create_dialog = false;
  public showDetail = false;

  @ViewChild('detailPageComponent')
  private detailPage: ParticipantDetailPageComponent;

  constructor(
      private domain: ParticipantDomainService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  get participants(){
      return this.domain.participants;
  }

  public open( p: Participant ){
      this.domain.open( p );
      this.showDetail = true;
      this.detailPage.load(p);
      //this.router.navigate( ['/wdys','participant','detail'] );
  }

}
