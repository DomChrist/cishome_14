import { Component, OnInit } from '@angular/core';
import {ShoppingListDomainService} from "../../services/shopping-list-domain.service";
import {ListDataService} from "../../services/list-data.service";

@Component({
  selector: 'app-shopping-dashboard',
  templateUrl: './shopping-dashboard.component.html',
  styleUrls: ['./shopping-dashboard.component.scss']
})
export class ShoppingDashboardComponent implements OnInit {

  constructor( public shopping: ShoppingListDomainService,
               public listData: ListDataService) { }

  ngOnInit(): void {
      this.shopping.shoppingListQueue.subscribe( () => {
         const l = this.list;
      });
  }


  get list(){
      return this.listData.currentLists;
  }

}
