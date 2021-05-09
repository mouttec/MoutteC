import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarMouttecComponent } from './calendar-mouttec/calendar-mouttec.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { SingleCustomerComponent } from './customer-view/single-customer/single-customer.component';

const routes: Routes = [
  { path: 'calendarMouttec', component: CalendarMouttecComponent },
  { path: 'customer', component: CustomerViewComponent },
  { path: 'customer/:idCustomer', component: SingleCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
