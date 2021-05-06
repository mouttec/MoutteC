import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeammateViewComponent } from './teammate-view/teammate-view.component';
import { TeammateFormsComponent } from './teammate-view/teammate-forms/teammate-forms.component';
import { SingleTeammateComponent } from './teammate-view/single-teammate/single-teammate.component';
import { AgencyViewComponent } from './agency-view/agency-view.component';
import { AgencyFormsComponent } from './agency-view/agency-forms/agency-forms.component';
import { SingleAgencyComponent } from './agency-view/single-agency/single-agency.component';
import { PartnerViewComponent } from './partner-view/partner-view.component';
import { PartnerFormsComponent } from './partner-view/partner-forms/partner-forms.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { UpdateAgencyComponent } from './agency-view/update-agency/update-agency.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { SingleCustomerComponent } from './customer-view/single-customer/single-customer.component';
import { CustomerFormsComponent } from './customer-view/customer-forms/customer-forms.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { SinglePartnerComponent } from './partner-view/single-partner/single-partner.component';
import { UpdatePartnerComponent } from './partner-view/update-partner/update-partner.component';
import { UpdateCustomerComponent } from './customer-view/update-customer/update-customer.component';
import { UpdateTeammateComponent } from './teammate-view/update-teammate/update-teammate.component';
import { AuthComponent } from './auth/auth.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ListBookingViewComponent } from './list-booking-view/list-booking-view.component';
import { BookingFormsComponent } from './list-booking-view/booking-forms/booking-forms.component';
import { SingleBookingComponent } from './list-booking-view/single-booking/single-booking.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

const routes: Routes = [
  { path: 'teammate', component: TeammateViewComponent },
  { path: 'addTeammate', component: TeammateFormsComponent },
  { path: 'teammate/:idTeammate', component: SingleTeammateComponent },
  { path: 'updateTeammate/:idTeammate', component: UpdateTeammateComponent },
  { path: 'agency', component: AgencyViewComponent },
  { path: 'addAgency', component: AgencyFormsComponent },
  { path: 'agency/:idAgency', component: SingleAgencyComponent },
  { path: 'updateAgency/:idAgency', component: UpdateAgencyComponent },
  { path: 'partner', component: PartnerViewComponent },
  { path: 'addPartner', component: PartnerFormsComponent },
  { path: 'partner/:idPartner', component: SinglePartnerComponent },
  { path: 'updatePartner/:idPartner', component: UpdatePartnerComponent },
  { path: 'customer', component: CustomerViewComponent },
  { path: 'addCustomer', component: CustomerFormsComponent },
  { path: 'customer/:idCustomer', component: SingleCustomerComponent },
  { path: 'updateCustomer/:idCustomer', component: UpdateCustomerComponent },
  { path: 'video', component: VideoViewComponent },
  { path: 'contract', component: ContractViewComponent },
  { path: 'profil', component: MyProfileComponent },
  { path: 'booking', component: ListBookingViewComponent },
  { path: 'addBooking', component: BookingFormsComponent },
  { path: 'booking/:idBooking', component: SingleBookingComponent },
  { path: 'calendar', component: CalendarViewComponent },
  { path: '', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
