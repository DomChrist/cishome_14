import { Injectable } from '@angular/core';
import {AddShoppingItem, ListsService, ShoppingService, StoreAggregate} from '../../../core/api/v1';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  private $stores: StoreAggregate[];

  constructor( private store: ShoppingService, private lists: ListsService) {
      this.$load();
  }

    private $load() {
        this.store.apiListShoppingStoreV1QueryAllGet('response').subscribe({
           next: value => this.$stores = value.body
        });
    }

    public send( id: string, name: string ){
      const i: AddShoppingItem = {
            itemName: name,
            counter: 0
        };
      this.store.apiListShoppingCmdV1ListIdAddItemPut(
          id, i, 'response'
      ).subscribe(
          {
              next: value => {}
          }
      );
    }

    get stores(): StoreAggregate[]{
      return this.$stores;
    }
}
