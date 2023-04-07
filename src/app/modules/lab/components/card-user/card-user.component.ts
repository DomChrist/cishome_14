import {Component, Input, OnInit} from '@angular/core';
import {CisUser} from '../../../../system/auth/authenticatedUser';
import {ListsService} from '../../../../core/api/v1/api/lists.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  private $user: CisUser;

  constructor( private list: ListsService) { }

  ngOnInit(): void {
        this.list.apiListQueryAllGet().subscribe( {
            next: (resp) => console.log(resp)
        } );
  }

  @Input()
  set user( u: CisUser ){
      this.$user = u;
  }

  get user(){ return this.$user; }


}
