import { SinglePartnerComponent } from './partner-view/single-partner/single-partner.component';
import { BookingComponent } from './booking/booking.component';
import { PartnerFormsComponent } from './partner-view/partner-forms/partner-forms.component';
import { PartnerViewComponent } from './partner-view/partner-view.component';
import { SingleManagerComponent } from './manager-view/single-manager/single-manager.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerFormsComponent } from './manager-view/manager-forms/manager-forms.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerFormsComponent } from './customer-view/customer-forms/customer-forms.component';

const routes: Routes = [
  { path: 'addCustomer', component: CustomerFormsComponent},
  { path: 'customer', component: CustomerViewComponent},
  { path: 'manager', component: ManagerViewComponent },
  { path: 'manager/:id', component: SingleManagerComponent },
  { path: 'addManager', component: ManagerFormsComponent },
  { path: 'partner', component: PartnerViewComponent },
  { path: 'addPartner', component: PartnerFormsComponent },
  { path: 'partner/:id', component: SinglePartnerComponent},
  { path: 'booking', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
