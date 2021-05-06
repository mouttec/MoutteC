import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { PartnerViewComponent } from './partner-view/partner-view.component';
import { SingleTeammateComponent } from './teammate-view/single-teammate/single-teammate.component';
import { TeammateFormsComponent } from './teammate-view/teammate-forms/teammate-forms.component';
import { TeammateViewComponent } from './teammate-view/teammate-view.component';

const routes: Routes = [
  { path: 'teammate', component: TeammateViewComponent },
  { path: 'addTeammate', component: TeammateFormsComponent },
  { path: 'teammate/:id', component: SingleTeammateComponent },
  { path: 'partner', component: PartnerViewComponent },
  { path: 'booking', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
