import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {AuthGuard} from '../../system/auth/auth.guard';
import {ShoppingDashboardComponent} from './pages/shopping-dashboard/shopping-dashboard.component';
import {ShoppingAppComponent} from "./pages/shopping-app/shopping-app.component";
import {ListComponent} from "./pages/list/list.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ShoppingAppComponent , canActivate: [AuthGuard] , children: [
                    {path: '' , component: ShoppingDashboardComponent},
                    {path: 'lists/:id' , component: ListComponent}
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
