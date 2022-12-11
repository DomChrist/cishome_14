import { Injectable } from '@angular/core';
import {
    AddShoppingItem,
    ListItemReadModel, ListReadModel,
    ShoppingListQueryResourceService,
    ShoppingListStoreResponse,
    ShoppingService,
    StoreAggregate, StoreItemDto
} from '../../../core/api/v1';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

    public lists: Array<ListAggregate>;
    public selectedList: ListAggregate;

    private $currentLists: Array<ListReadModel>;
    private $selected: ListReadModel;

    private selectedSubject = new Subject<ListReadModel>();
    public selectedListener = this.selectedSubject.asObservable();

  constructor(
      public shopping: ShoppingService,
      public shoppingQuery: ShoppingListQueryResourceService
  ) {
      this.loadLists();
  }


  public loadLists(){

      this.shoppingQuery.apiV2ShoppingMeGet('response')
          .subscribe( {
              next: value => {
                  this.$currentLists = value.body;
                  this.lists = value.body.map( e => new ListAggregate(e) );
              }
          } );

  }

  public loadList( id: string ){
      this.shoppingQuery.apiV2ShoppingListsIdGet( id, 'response' ).subscribe(
          {
              next: value => {
                  this.$selected = value.body;
                  this.selectedList = new ListAggregate( value.body );
                  this.selectedSubject.next( value.body );
              }
          }
      );
  }

  public newItem( item: AddShoppingItem, success: () => void ){
      return this.shopping.apiListShoppingCmdV1ListIdAddItemPut(
          this.$selected.id,
          item
      ).subscribe( (value) => {
          success();
          this.loadList(this.$selected.id);
      } );
  }


    select(id: string) {
        if ( this.lists ){
            const models = this.lists.filter(l => l.id === id );
            if( models.length === 1 ){
                this.selectedList = models[0];
            } else {
                this.loadList(id);
            }
        } else {
            this.loadList(id);
        }
    }

    get selected(){
      if( this.$selected ){
          return this.$selected;
      } else {
          return null;
      }
    }

    get currentLists(): Array<ListItemReadModel>{
        return this.$currentLists;
    }


    selectList(l: ListAggregate) {
        this.selectedList = l;
    }

    delete(item: ListItem) {
    }
}

export class ListAggregate{

    private $id;
    private $name;
    private $stores: Array<StoreList>;

    constructor( l: ListReadModel) {
        this.$id = l.id;
        this.$name = l.name;
        this.$stores = l.stores.map( e => new StoreList(e) );
    }

    get id(){
        return this.$id;
    }

    get name(){
        return this.$name;
    }

    get stores(){
        return this.$stores;
    }


}

export class StoreList{

    private $id;
    private $name;
    private $key;
    private $items: Array<ListItem>;

    constructor(s: StoreItemDto) {
        this.$id = s.store.id;
        this.$name = s.store.name;
        this.$key = s.store.key;
        console.log('s.items=');
        console.log(s.items);
        if( s.items ){
            this.$items = s.items.map( e => new ListItem(e) );
        }
        console.log(this);
    }

    get id(){
        return this.$id;
    }

    get name(){
        return this.$name;
    }

    get key(){
        return this.$key;
    }

    get items(){
        return this.$items;
    }


}

export class ListItem{

    private $id: string;
    private $name: string;
    private $counter: number;
    private $bought = false;

    constructor( i: ListItemReadModel ) {
        this.$id = i.id;
        this.$name = i.name;
        this.$counter = i.counter;
    }

    public purchase(){
        this.$bought = true;
    }

    public cancellation(){
        this.$bought = false;
    }

    get id(){
        return this.$id;
    }

    get name(){
        return this.$name;
    }

    get counter(){
        return this.$counter;
    }

    get bought(){
        return this.$bought;
    }

    increase() {
        this.$counter++;
    }

    decrease(){
        this.$counter--;
    }
}


