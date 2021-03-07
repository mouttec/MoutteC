import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerComponent } from './customer-view/customer/customer.component';
import { SingleCustomerComponent } from './customer-view/single-customer/single-customer.component';
import { CustomerFormComponent } from './customer-view/customer-form/customer-form.component';
import { PayementOfDayViewComponent } from './payement-of-day-view/payement-of-day-view.component';
import { PayementOfDayComponent } from './payement-of-day-view/payement-of-day/payement-of-day.component';
import { SinglePayementOfDayComponent } from './payement-of-day-view/single-payement-of-day/single-payement-of-day.component';
import { MonthlyPaymentViewComponent } from './monthly-payment-view/monthly-payment-view.component';
import { MonthlyPaymentComponent } from './monthly-payment-view/monthly-payment/monthly-payment.component';
import { SingleMonthlyPaymentComponent } from './monthly-payment-view/single-monthly-payment/single-monthly-payment.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerViewComponent,
    CustomerComponent,
    SingleCustomerComponent,
    CustomerFormComponent,
    PayementOfDayViewComponent,
    PayementOfDayComponent,
    SinglePayementOfDayComponent,
    MonthlyPaymentViewComponent,
    MonthlyPaymentComponent,
    SingleMonthlyPaymentComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
