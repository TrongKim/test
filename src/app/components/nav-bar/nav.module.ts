import { AppModule } from './../../app.module';
import { NgModule } from "@angular/core";
import { ShareComponentComponent } from "src/app/share-component/share-component.component";
import { NavBarComponent } from "./nav-bar.component";
import { NavItemComponent } from "./nav-item/nav-item.component";
import { NavItem2Component } from "./nav-item/nav-item2/nav-item2.component";
import { NavRoutingModule } from "./nav-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        NavRoutingModule,
        FormsModule,
    ],
    declarations: [
        NavBarComponent,
        ShareComponentComponent,
        NavItemComponent,
        NavItem2Component,
    ],
    exports: [ShareComponentComponent]
})
export class NavModule { } 