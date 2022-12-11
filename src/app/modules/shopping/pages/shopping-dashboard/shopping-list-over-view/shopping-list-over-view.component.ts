import {Component, Input, OnInit} from '@angular/core';
import {ShoppingListItemResponse, ShoppingListResponse} from "../../../../../core/api/v1";
import {ShoppingListDomainService} from "../../../services/shopping-list-domain.service";
import {ListAggregate, ListDataService} from "../../../services/list-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-list-over-view',
  templateUrl: './shopping-list-over-view.component.html',
  styleUrls: ['./shopping-list-over-view.component.scss']
})
export class ShoppingListOverViewComponent implements OnInit {

  constructor( public shopping: ShoppingListDomainService,
               public router: Router,
               public listData: ListDataService) { }

  ngOnInit(): void {
  }

  public route( l: ListAggregate ){
      this.listData.selectList( l );
      this.router.navigate(['shopping', 'lists', l.id]);
  }


  get lists(){
      console.log("lists");
      console.log( this.listData.lists );
      return this.listData.lists;
  }



}
