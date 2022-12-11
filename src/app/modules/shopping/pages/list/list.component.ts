import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ListAggregate, ListDataService} from "../../services/list-data.service";
import {AddShoppingItem, ShoppingListItemResponse, ShoppingStore} from "../../../../core/api/v1";
import {MessageService} from "primeng/api";
import {BoughtPipe} from "./shopping-store/bought.pipe";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public addShoppingItem: AddShoppingItem;

  constructor(
      private msg: MessageService,
      private activated: ActivatedRoute,
      public lists: ListDataService
  ) { }

  public showCreateDialog = false;

  ngOnInit(): void {
      this.addShoppingItem  = {
          counter: 1,
          itemName: '',
          store: ''
      };
      this.activated.params.subscribe(
          {
              next: (value: Params) => this.lists.select( value.id )
          }
      );

  }

  public url( k: string ): string{
      if( !k || k === 'default' ){
          return 'assets/lists/shopping/stores/' + k + '.png';
      }
      return 'assets/lists/shopping/stores/' + k + '.svg';
  }

  get items(): ListAggregate{
        const selected = this.lists.selectedList;
        return selected;
  }



    sendNewItem() {
      console.log('sendNewItem');
      console.log( this.addShoppingItem );
            this.lists.newItem( this.addShoppingItem , () => {
            this.addShoppingItem = {};
            this.msg.add({severity: 'success', summary: 'Item created'});
            this.addShoppingItem = {};
        } );
    }

    shoppingMode(event) {
        alert('test');
        event.preventDefault();
    }
}
