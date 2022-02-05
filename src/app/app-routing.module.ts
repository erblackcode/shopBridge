import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ShopBridgeDashboardComponent } from './shop-bridge-dashboard/shop-bridge-dashboard.component';

const routes: Routes = [

  { path:'', component: ShopBridgeDashboardComponent },
  { path:'profile/:id', component: ProfileComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
