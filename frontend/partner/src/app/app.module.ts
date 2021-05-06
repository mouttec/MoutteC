import { CalendarService } from 'src/app/services/calendar.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MonthlybillingViewComponent } from './monthlybilling-view/monthlybilling-view.component';
import { MonthlyBillingComponent } from './monthlybilling-view/monthly-billing/monthly-billing.component';
import { PartnerService } from './services/partner.service';
import { MonthyBillingService } from './services/monthy-billing.service';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerComponent } from './customer-view/customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanningComponent } from './planning/planning.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarPersoComponent } from './calendar-perso/calendar-perso.component';
import { CalendarPersoSingleComponent } from './calendar-perso/calendar-perso-single/calendar-perso-single.component';


registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyProfileComponent,
    MonthlybillingViewComponent,
    MonthlyBillingComponent,
    CustomerViewComponent,
    CustomerComponent,
    PlanningComponent,
    CalendarPersoComponent,
    CalendarPersoSingleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModule
  ],
  providers: [
    CalendarService,
    CustomerService,
    PartnerService,
    MonthyBillingService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
