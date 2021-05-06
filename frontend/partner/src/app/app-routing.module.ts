import { CalendarPersoSingleComponent } from './calendar-perso/calendar-perso-single/calendar-perso-single.component';
import { CalendarPersoComponent } from './calendar-perso/calendar-perso.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { MonthlybillingViewComponent } from './monthlybilling-view/monthlybilling-view.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PlanningComponent } from './planning/planning.component';



const routes: Routes = [
  { path: 'planning', component: PlanningComponent },
  { path: 'calendarPerso', component: CalendarPersoComponent },
  { path: 'calendarPerso/:id', component: CalendarPersoSingleComponent },
  { path: 'customer', component: CustomerViewComponent },
  { path: 'monthlyBilling', component: MonthlybillingViewComponent },
  { path: ':idPartner', component: MyProfileComponent },
  { path: '', component: PlanningComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
