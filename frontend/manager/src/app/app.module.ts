import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeammateViewComponent } from './teammate-view/teammate-view.component';
import { TeammateComponent } from './teammate-view/teammate/teammate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeammateFormsComponent } from './teammate-view/teammate-forms/teammate-forms.component';
import { SingleTeammateComponent } from './teammate-view/single-teammate/single-teammate.component';
import { AgencyViewComponent } from './agency-view/agency-view.component';
import { AgencyComponent } from './agency-view/agency/agency.component';
import { AgencyFormsComponent } from './agency-view/agency-forms/agency-forms.component';
import { SingleAgencyComponent } from './agency-view/single-agency/single-agency.component';
import { PartnerViewComponent } from './partner-view/partner-view.component';
import { PartnerComponent } from './partner-view/partner/partner.component';
import { PartnerFormsComponent } from './partner-view/partner-forms/partner-forms.component';
import { SinglePartnerComponent } from './partner-view/single-partner/single-partner.component';

import { PartnerService } from './services/partner.service';
import { AgencyService } from './services/agency.service';
import { TeammateService } from './services/teammate.service';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BookingComponent } from './booking/booking.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import 'flatpickr/dist/flatpickr.css'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeammateViewComponent,
    TeammateComponent,
    TeammateFormsComponent,
    SingleTeammateComponent,
    AgencyViewComponent,
    AgencyComponent,
    AgencyFormsComponent,
    SingleAgencyComponent,
    PartnerViewComponent,
    PartnerComponent,
    PartnerFormsComponent,
    SinglePartnerComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    TeammateService,
    AgencyService,
    PartnerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
