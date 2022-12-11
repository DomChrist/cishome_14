import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListItemReadModel} from "../../../../../core/api/v1";
import {ListItem} from "../../../services/list-data.service";

@Component({
    // tslint:disable-next-line:component-selector
  selector: 'shopping-list-item-box',
  templateUrl: './shopping-list-item-box.component.html',
  styleUrls: ['./shopping-list-item-box.component.scss']
})
export class ShoppingListItemBoxComponent implements OnInit {

  private $item: ListItem;
  private $firstLetter: string;
  private boughtEmitter = new EventEmitter<ListItem>();
  private onDeleteEmitter = new EventEmitter<ListItem>();
  private onCancellationEmitter = new EventEmitter<ListItem>();

  public bought = false;
  public editMode = false;
  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  set item( n: ListItem ){
      this.$item = n;
      this.$firstLetter = n.name.substring(0, 1);
      this.bought = n.bought;
  }

  @Input()
  set editModeEnabled( mode: boolean ){
      this.editMode = mode;
  }

  public boughtAction(){
      if( this.$item.bought ){
          this.$item.cancellation();
      } else {
          this.$item.purchase();
      }
      this.bought = this.$item.bought;
      this.boughtEmitter.emit(this.$item);
  }

  public plus(){
      this.$item.increase();
  }

  public minus(){
      this.$item.decrease();
  }

  public delete(){
      this.onDeleteEmitter.emit(this.$item);
  }

  get listItem(){
      return this.$item;
  }

  get name(): string {
      if ( !this.$item ){
          return '';
      }
      return this.$item.name;
  }

  get firstLetter(){
      if ( this.$firstLetter ){
          return this.$firstLetter.toUpperCase();
      }
      return '';
  }

  get counter(){
      return this.$item.counter;
  }

  @Output()
  get onBought(){
      return this.boughtEmitter;
  }

  @Output()
  get onDelete(){
      return this.onDeleteEmitter;
  }

  @Output()
  get onCancellation(){
      return this.onCancellationEmitter;
  }



}
