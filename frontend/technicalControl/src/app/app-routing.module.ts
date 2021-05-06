import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ListBookingViewComponent } from './list-booking-view/list-booking-view.component';
import { SingleBookingComponent } from './list-booking-view/single-booking/single-booking.component';
import { MyProfilComponent } from './/my-profil/my-profil.component';

const routes: Routes = [
  { path: 'booking', component: ListBookingViewComponent },
  { path: 'booking/:idBooking', component: SingleBookingComponent },
  { path: ':idPartner', component: MyProfilComponent },
  { path: '', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
