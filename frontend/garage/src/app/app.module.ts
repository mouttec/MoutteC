import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from './services/booking.service';
import { BookingCalendarViewComponent } from './booking-calendar-view/booking-calendar-view.component';
import { BookingCalendarComponent } from './booking-calendar-view/booking-calendar/booking-calendar.component';
import { BookingCalendarFormsComponent } from './booking-calendar-view/booking-calendar-forms/booking-calendar-forms.component';
import { SingleBookingCalendarComponent } from './booking-calendar-view/single-booking-calendar/single-booking-calendar.component';
import { BookingCalendarView1Component } from './booking-calendar-view1/booking-calendar-view1.component';
import { BookingCalendar1Component } from './booking-calendar-view1/booking-calendar1/booking-calendar1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookingCalendarViewComponent,
    BookingCalendarComponent,
    BookingCalendarFormsComponent,
    SingleBookingCalendarComponent,
    BookingCalendarView1Component,
    BookingCalendar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
