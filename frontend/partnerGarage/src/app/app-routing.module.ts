import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { MonthlyPaymentViewComponent } from './monthly-payment-view/monthly-payment-view.component';
import { PayementOfDayViewComponent } from './payement-of-day-view/payement-of-day-view.component';

const routes: Routes = [
  {path: 'booking', component: BookingComponent},
  {path: 'customer', component: CustomerViewComponent},
  {path: 'paymentOfDay', component: PayementOfDayViewComponent},
  {path: 'monthlyPayment', component: MonthlyPaymentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
