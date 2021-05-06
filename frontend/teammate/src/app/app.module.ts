import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeammateViewComponent } from './teammate-view/teammate-view.component';
import { TeammateComponent } from './teammate-view/teammate/teammate.component';
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
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerComponent } from './customer-view/customer/customer.component';
import { CustomerFormsComponent } from './customer-view/customer-forms/customer-forms.component';
import { SingleCustomerComponent } from './customer-view/single-customer/single-customer.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { VideoComponent } from './video-view/video/video.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { ContractComponent } from './contract-view/contract/contract.component';
import { UpdateAgencyComponent } from './agency-view/update-agency/update-agency.component';
import { UpdatePartnerComponent } from './partner-view/update-partner/update-partner.component';
import { UpdateCustomerComponent } from './customer-view/update-customer/update-customer.component';
import { UpdateTeammateComponent } from './teammate-view/update-teammate/update-teammate.component';
import { AuthComponent } from './auth/auth.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ListBookingViewComponent } from './list-booking-view/list-booking-view.component';
import { ListBookingComponent } from './list-booking-view/list-booking/list-booking.component';
import { SingleBookingComponent } from './list-booking-view/single-booking/single-booking.component';
import { BookingFormsComponent } from './list-booking-view/booking-forms/booking-forms.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

import { TeammateService } from './services/teammate.service';
import { AgencyService } from './services/agency.service';
import { CustomerService } from './services/customer.service';
import { VideoService } from './services/video.service';
import { PartnerService } from './services/partner.service';
import { ContractService } from './services/contract.service';
import { BookingService } from './services/booking.service';
import { CalendarService } from './services/calendar.service';

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
    CustomerViewComponent,
    CustomerComponent,
    CustomerFormsComponent,
    SingleCustomerComponent,
    VideoViewComponent,
    VideoComponent,
    ContractViewComponent,
    ContractComponent,
    UpdateAgencyComponent,
    UpdatePartnerComponent,
    UpdateCustomerComponent,
    UpdateTeammateComponent,
    AuthComponent,
    MyProfileComponent,
    ListBookingViewComponent,
    ListBookingComponent,
    SingleBookingComponent,
    BookingFormsComponent,
    CalendarViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TeammateService,
    AgencyService,
    PartnerService,
    ContractService,
    CustomerService,
    VideoService,
    BookingService,
    CalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
