import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/bookings.model';

@Component({
  selector: 'app-booking-calendar-view',
  templateUrl: './booking-calendar-view.component.html',
  styleUrls: ['./booking-calendar-view.component.css']
})
export class BookingCalendarViewComponent implements OnInit, OnDestroy {

  bookings: Booking[];
  bookingSubscription: Subscription;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingSubscription = this.bookingService.bookingSubject.subscribe(
      (bookings: Booking[]) => {
        this.bookings = bookings;
      }
    );
    this.bookingService.readListCalendar();
  }

  ngOnDestroy(): void {
    this.bookingSubscription.unsubscribe();
  }
}
