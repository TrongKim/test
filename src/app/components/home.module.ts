import { NgModule } from "@angular/core";
import { HomePageComponent } from "../home-page/home-page.component";
import { ShareComponentComponent } from "../share-component/share-component.component";
import { FooterComponent } from "./footer/footer.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NavModule } from "./nav-bar/nav.module";

@NgModule({
    imports: [
        NavModule
    ],
    declarations: [
        HomePageComponent,
        FooterComponent,
    ],
})
export class HomeModule { }