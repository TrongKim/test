import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponentComponent } from 'src/app/share-component/share-component.component';
import { NavBarComponent } from './nav-bar.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavItem2Component } from './nav-item/nav-item2/nav-item2.component';

const routesNav: Routes = [
    {
        path: '',
        component: NavBarComponent,
    }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routesNav)],
    exports: [RouterModule]
  })
  export class NavRoutingModule { }