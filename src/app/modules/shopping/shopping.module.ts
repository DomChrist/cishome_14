import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingDashboardComponent } from './pages/shopping-dashboard/shopping-dashboard.component';
import { ShoppingWidgetComponent } from './pages/shopping-widget/shopping-widget.component';
import {ShoppingRoutingModule} from './shopping.routes';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import { ShoppingListOverViewComponent } from './pages/shopping-dashboard/shopping-list-over-view/shopping-list-over-view.component';
import { ShoppingAppComponent } from './pages/shopping-app/shopping-app.component';
import { ShoppingAppTopbarComponent } from './pages/shopping-app/shopping-app-topbar/shopping-app-topbar.component';
import {AvatarModule} from "primeng/avatar";
import {DividerModule} from "primeng/divider";
import { ShoppingDashboardStoresComponent } from './pages/shopping-dashboard/shopping-dashboard-stores/shopping-dashboard-stores.component';
import {CarouselModule} from "primeng/carousel";
import { ListComponent } from './pages/list/list.component';
import { ShoppingListItemBoxComponent } from './pages/list/shopping-list-item-box/shopping-list-item-box.component';
import { ShoppingListStorePartComponent } from './pages/list/shopping-list-store-part/shopping-list-store-part.component';
import {FieldsetModule} from "primeng/fieldset";
import { ShoppingAddSidebarComponent } from './pages/list/shopping-add-sidebar/shopping-add-sidebar.component';
import {SidebarModule} from "primeng/sidebar";
import {StepsModule} from "primeng/steps";
import {InputTextModule} from "primeng/inputtext";
import {SelectButtonModule} from "primeng/selectbutton";
import {FormsModule} from "@angular/forms";
import {BadgeModule} from "primeng/badge";
import {ToastModule} from "primeng/toast";
import { ShoppingStoreComponent } from './pages/list/shopping-store/shopping-store.component';
import { ShoppingStoresComponent } from './pages/list/shopping-stores/shopping-stores.component';
import { BoughtPipe } from './pages/list/shopping-store/bought.pipe';



@NgModule({
  declarations: [
    ShoppingDashboardComponent,
    ShoppingWidgetComponent,
    ShoppingListOverViewComponent,

    ShoppingAppComponent,
    ShoppingAppTopbarComponent,
    ShoppingDashboardStoresComponent,
    ListComponent,
    ShoppingListItemBoxComponent,
    ShoppingListStorePartComponent,
    ShoppingAddSidebarComponent,
    ShoppingStoreComponent,
    ShoppingStoresComponent,
    BoughtPipe
  ],
    imports: [
        CommonModule,
        ButtonModule,
        ShoppingRoutingModule,
        CardModule,
        AvatarModule,
        DividerModule,
        CarouselModule,
        FieldsetModule,
        SidebarModule,
        StepsModule,
        InputTextModule,
        SelectButtonModule,
        FormsModule,
        BadgeModule,
        ToastModule
    ],
  exports: [ShoppingWidgetComponent]
})
export class ShoppingModule { }
