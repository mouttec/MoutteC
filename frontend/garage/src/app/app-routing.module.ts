import { BookingCalendarView1Component } from './booking-calendar-view1/booking-calendar-view1.component';
import { SingleBookingCalendarComponent } from './booking-calendar-view/single-booking-calendar/single-booking-calendar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingCalendarViewComponent } from './booking-calendar-view/booking-calendar-view.component';

const routes: Routes = [
  { path: 'booking', component: BookingCalendarViewComponent },
  { path: 'booking/:idBooking', component: SingleBookingCalendarComponent },
  { path: 'calendar', component: BookingCalendarView1Component },
  { path: 'calendar/:idBooking', component: BookingCalendarView1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
