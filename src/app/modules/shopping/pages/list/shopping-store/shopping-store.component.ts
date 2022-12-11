import {Component, Input, OnInit} from '@angular/core';
import {AddShoppingItem, ListReadModel, ProductPriceDto, Store, StoreItemDto} from '../../../../../core/api/v1';
import {ListDataService, ListItem, StoreList} from '../../../services/list-data.service';
import {BoughtPipe} from './bought.pipe';
import {SettlementService} from "../../../services/settlement.service";

@Component({
  selector: 'shopping-store',
  templateUrl: './shopping-store.component.html',
  styleUrls: ['./shopping-store.component.scss']
})
export class ShoppingStoreComponent implements OnInit {

  private $store: StoreList;
  private $editMode = false;
  public boughtList = new Array<ListItem>();
  public list = new Array<ListItem>();

  public showAddDialog = false;
  public showSettlement = false;

  public countings = [];
  public amount: number;

  public add: AddShoppingItem;

  constructor(
      private data: ListDataService,
      private settlement: SettlementService
  ) { }

  ngOnInit(): void {
      this.add = {};
      this.countings = [
          {label: '1', value: 1},
          {label: '2', value: 2},
          {label: '3', value: 3},
          {label: '4', value: 4},
          {label: '5', value: 5},
          {label: '6', value: 6},
          {label: '7', value: 7},
          {label: '8', value: 8},
          {label: '9', value: 9},
          {label: '10', value: 10}
      ];
      this.amount = this.countings[0].value;

  }

  public startSettlement(){
      alert(this.bought.length);
      const products = this.bought.map( b => {
         let d: ProductPriceDto  = {
             id : b.id,
             name : b.name,
             price : 0,
             count : b.counter
         };
         return d;
      });
      const store = this.$store.id ? this.$store.id : 'default';
      this.settlement.startSettlement( store , products  );
      this.showSettlement = true;
  }

  public doSettlement( amount: string ){
      amount =  amount.replace('.' , '').replace(',','.');
      const parseFloat: number = Number.parseFloat(amount);
      this.settlement.finishSettlement( parseFloat , () => this.showSettlement = false);
  }

  public addItem(){
      this.add.store = this.$store.id;
      this.add.counter = this.amount;
      this.data.newItem( this.add , () => {
          alert('');
      });
  }

    public url( k: string ): string{
        if ( !k || k === 'default' ){
            return 'assets/lists/shopping/stores/' + k + '.png';
        }
        return 'assets/lists/shopping/stores/' + k + '.svg';
    }



  @Input('store')
  set store( store: StoreList){
      this.$store = store;
  }

  get store(){
      return this.$store;
  }

  get items(): Array<ListItem>{
      return this.$store.items;
  }

  get bought(): Array<ListItem> {
      return new BoughtPipe().transform( this.$store.items , true );
  }

  get open(){
      return new BoughtPipe().transform( this.$store.items , false );
  }

  get editMode(){
      return this.$editMode;
  }

  set editMode( m: boolean ){
      this.$editMode = m;
  }

    onBought( item: ListItem) {
        item.purchase();
        this.boughtList.push( item );
    }

    onCancellation( item: ListItem ){
      item.cancellation();
    }

    onDelete( item: ListItem) {
        this.data.delete( item );
    }
}
