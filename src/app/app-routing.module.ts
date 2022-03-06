import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomePageComponent,
    loadChildren: () => import('./components/home.module').then(m => m.HomeModule)
  }, 
  {
    path: 'Nav',
    loadChildren: () => import('./components/nav-bar/nav.module').then(m => m.NavModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
