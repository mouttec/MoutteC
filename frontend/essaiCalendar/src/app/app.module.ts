import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { CalendarMouttecComponent } from './calendar-mouttec/calendar-mouttec.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerComponent } from './customer-view/customer/customer.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';

import { CustomerService } from 'src/app/services/customer.service';
import { EventsService } from 'src/app/services/events.service';
import { SingleCustomerComponent } from './customer-view/single-customer/single-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarMouttecComponent,
    CustomerViewComponent,
    CustomerComponent,
    SingleCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    CustomerService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
