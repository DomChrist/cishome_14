import { Component, OnInit } from '@angular/core';
import {StoreDataService} from "../../../services/store-data.service";
import {Store, StoreAggregate} from "../../../../../core/api/v1";

@Component({
  selector: 'app-shopping-dashboard-stores',
  templateUrl: './shopping-dashboard-stores.component.html',
  styleUrls: ['./shopping-dashboard-stores.component.scss']
})
export class ShoppingDashboardStoresComponent implements OnInit {

  constructor( public store: StoreDataService ) { }

  ngOnInit(): void {
  }


  imagePath( s: StoreAggregate ) {
      console.log();
        if( s ){
            return '/assets/lists/shopping/stores/' + s.store.name.key + '.svg';
        } else {
            return '/assets/icons/flaticon/supermarkt.png';
        }
  }

}
