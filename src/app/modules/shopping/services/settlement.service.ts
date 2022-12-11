import { Injectable } from '@angular/core';
import {ListsShoppingSettlementService, NewSettlementRequest, ProductPriceDto} from '../../../core/api/v1';
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SettlementService {

  private $storeId: string;
  private $settlementProducts: ProductPriceDto[];

  constructor( private service: ListsShoppingSettlementService) { }


    public startSettlement( storeId: string, products: ProductPriceDto[] ){
      this.$settlementProducts = products;
      this.$storeId = storeId;
    }

    public finishSettlement( amount: number , onSuccess?: () => void ){
        const request: NewSettlementRequest = {
            storeId : this.$storeId,
            amount,
            products : this.$settlementProducts
        };
        console.log(request);
        return this.service.apiListShoppingSettlementV1CmdPost( request  , 'response')
            .subscribe( {
                next: (r) => {
                    this.$settlementProducts = [];
                    this.$storeId = '';
                    onSuccess();
                }
            } );
    }


    get settlementProducts(){
      return this.$settlementProducts;
    }

}
