import {Component, Input, OnInit} from '@angular/core';
import {ListItem, StoreList} from '../../../services/list-data.service';

@Component({
  selector: 'shopping-stores',
  templateUrl: './shopping-stores.component.html',
  styleUrls: ['./shopping-stores.component.scss']
})
export class ShoppingStoresComponent implements OnInit {

    private $stores: Array<StoreList>;
    private $editMode = false;
    constructor() { }

    ngOnInit(): void {
    }

    public addItem(){
        alert('');
    }

    public url( k: string ): string{
        if( !k || k === 'default' ){
            return 'assets/lists/shopping/stores/' + k + '.png';
        }
        return 'assets/lists/shopping/stores/' + k + '.svg';
    }



    @Input('stores')
    set stores( items: Array<StoreList> ){
        this.$stores = items;
    }

    get stores(): Array<StoreList>{
        return this.$stores;
    }

    get editMode(){
        return this.$editMode;
    }

    set editMode( m: boolean ){
        this.$editMode = m;
    }

}
