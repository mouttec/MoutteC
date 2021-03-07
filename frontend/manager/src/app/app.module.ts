import { BookingService } from './services/booking.service';
import { VideoService } from './services/video.service';
import { ContractService } from './services/contract.service';
import { CustomerService } from './services/customer.service';
import { ManagerService } from './services/manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { ManagerComponent } from './manager-view/manager/manager.component';
import { ManagerFormsComponent } from './manager-view/manager-forms/manager-forms.component';
import { SingleManagerComponent } from './manager-view/single-manager/single-manager.component';
import { PartnerViewComponent } from './partner-view/partner-view.component';
import { SinglePartnerComponent } from './partner-view/single-partner/single-partner.component';
import { PartnerComponent } from './partner-view/partner/partner.component';
import { PartnerFormsComponent } from './partner-view/partner-forms/partner-forms.component';
import { PartnerService } from './services/partner.service';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerComponent } from './customer-view/customer/customer.component';
import { CustomerFormsComponent } from './customer-view/customer-forms/customer-forms.component';
import { SingleCustomerComponent } from './customer-view/single-customer/single-customer.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { ContractComponent } from './contract-view/contract/contract.component';
import { SingleContractComponent } from './contract-view/single-contract/single-contract.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { VideoComponent } from './video-view/video/video.component';
import { SingleVideoComponent } from './video-view/single-video/single-video.component';
import { BookingComponent } from './booking/booking.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManagerViewComponent,
    ManagerComponent,
    ManagerFormsComponent,
    SingleManagerComponent,
    PartnerViewComponent,
    SinglePartnerComponent,
    PartnerComponent,
    PartnerFormsComponent,
    CustomerViewComponent,
    CustomerComponent,
    CustomerFormsComponent,
    SingleCustomerComponent,
    ContractViewComponent,
    ContractComponent,
    SingleContractComponent,
    VideoViewComponent,
    VideoComponent,
    SingleVideoComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [
    ManagerService,
    PartnerService,
    CustomerService,
    ContractService,
    VideoService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
