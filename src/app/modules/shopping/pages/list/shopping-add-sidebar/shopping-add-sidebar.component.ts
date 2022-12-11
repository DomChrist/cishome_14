import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from "primeng/api";
import {StoreDataService} from "../../../services/store-data.service";
import {AddShoppingItem, Store, StoreAggregate} from "../../../../../core/api/v1";
import {ListDataService} from "../../../services/list-data.service";
import {niceNum} from "chart.js/helpers";

@Component({
  selector: 'shopping-add-sidebar',
  templateUrl: './shopping-add-sidebar.component.html',
  styleUrls: ['./shopping-add-sidebar.component.scss']
})
export class ShoppingAddSidebarComponent implements OnInit {

    private $visible = false;
    private $visibleChange = new EventEmitter<boolean>();

    public selectedStore: Store;

    public items: any;
    public amount: any;

    constructor(public stores: StoreDataService, public listData: ListDataService) {
    }

    ngOnInit(): void {

        this.items = [
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
        this.amount = this.items[0].value;
    }

    @Input()
    set visible(b: boolean) {
        this.$visible = b;
        this.$visibleChange.emit(b);
    }

    public addItem(txt: string) {

        alert(this.amount);

        const n: number = this.amount && this.amount > 0 ? this.amount : 1;

        const item: AddShoppingItem = {
            itemName: txt,
            store: this.selectedStore ? this.selectedStore.storeId.id : 'default',
            counter : n
        };
        this.listData.newItem(item, () => {
            alert('');
        });
    }


  get visible(){
      return this.$visible;
  }

  @Output()
  get visibleChange(): EventEmitter<boolean>{
      return this.$visibleChange;
  }

    storeImage(key: string) {
        return '/assets/lists/shopping/stores/' + key + '.svg';
    }

    selectStore(s: StoreAggregate) {
        this.selectedStore = s.store;
    }

    selectAmount($event: Event) {
        console.log($event);
        this.amount = $event['value'];
    }
}
