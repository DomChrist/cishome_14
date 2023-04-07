import { Injectable } from '@angular/core';
import {ShoppingListItemResponse, ShoppingListResponse, } from '../../../core/api/v1';
import {Subject} from "rxjs";
import {ListManagementResponse} from "../infrastructure/shopping-responses";
import {ShoppingService} from "../../../core/api/v1/api/shopping.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListDomainService {

  private $lists: ListManagementResponse;
  private $shoppingListQueue = new Subject();
  public  shoppingListQueue = this.$shoppingListQueue.asObservable();

  constructor( private service: ShoppingService) {
    this.$load();

  }

  private $load(){
      this.service.apiListShoppinglistQueryV1Get('response').subscribe(
          {
              next: value => {
                  console.log('http');
                  console.log(value);
              }
          }
      );
  }



  get lists(): ShoppingListItemResponse[]{
      console.log(this.$lists);
      if( this.$lists ){
          return this.$lists.responseList;
      }
      return undefined;
  }


}
