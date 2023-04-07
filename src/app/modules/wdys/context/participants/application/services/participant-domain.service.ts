import { Injectable } from '@angular/core';
import {CreateParticipantCommand, Participant, WdysParticipantService} from '../../../../../../core/api/v1';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParticipantDomainService {

    private $participants: Participant[];

    private $selectedParticipant: Participant;


  constructor(
      private service: WdysParticipantService,
  ) {
      this.reload();
  }

  private reload(){
      this.service.apiWdysParticipantQueryAllGet('response')
          .subscribe({
              next: (resp) => {
                  this.$participants = resp.body;
                  console.log(this.$participants);
              }
          });
  }


  public newParticipant( cmd: CreateParticipantCommand , onSuccess?: () => void , onError?: () => void ){
      this.service.apiWdysParticipantCmdNewPost( cmd , 'response' ).subscribe(
          {
              next: resp => {
                  if ( resp.status >= 200 && resp.status < 300 ){
                      onSuccess();
                      this.reload();
                  } else {
                      onError();
                  }
              },
              error: (e) => onError()
          }
      );
  }

  public loadSessionsWithParticipant( p: Participant ){
      return this.service.apiWdysParticipantQueryParticipantParticipantSessionsGet( p.id , 'response');
  }

  public open( p: Participant ){
      this.$selectedParticipant = p;
  }


  get selectedParticipant(){
      return this.$selectedParticipant;
  }

  get participants(){
      return this.$participants;
  }


}
