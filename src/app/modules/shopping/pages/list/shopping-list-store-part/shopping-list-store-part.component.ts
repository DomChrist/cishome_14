import {Component, Input, OnInit} from '@angular/core';
import {ShoppingStore} from "../../../../../core/api/v1";

@Component({
  selector: 'shopping-list-store-part',
  templateUrl: './shopping-list-store-part.component.html',
  styleUrls: ['./shopping-list-store-part.component.scss']
})
export class ShoppingListStorePartComponent implements OnInit {

  private $store: ShoppingStore;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set store( s: ShoppingStore ){
      this.$store = s;
  }

  get store(){
      return this.$store;
  }

}
