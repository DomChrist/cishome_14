import { Injectable } from '@angular/core';
import {CreateParticipantCommand, Participant, WdysParticipantService} from '../../../../../../core/api/v1';

@Injectable({
  providedIn: 'root'
})
export class ParticipantDomainService {

    private $participants: Participant[];


  constructor(
      private service: WdysParticipantService
  ) {
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
                  } else {
                      onError();
                  }
              },
              error: (e) => onError()
          }
      );
  }



  get participants(){
      return this.$participants;
  }


}
