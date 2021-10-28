import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{ path: '', redirectTo: '/customer', pathMatch: 'full' },

  { path: 'customer', component: CustomerComponent },

  { path: 'details', component: DetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
