import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-list-booking-view',
  templateUrl: './list-booking-view.component.html',
  styleUrls: ['./list-booking-view.component.css']
})
export class ListBookingViewComponent implements OnInit, OnDestroy {

  bookings: any[];
  bookingSubscription: Subscription;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingSubscription = this.bookingService.bookingSubject.subscribe(
      (bookings: any[]) => {
        this.bookings = bookings;
        console.log(this.bookings);
      }
    );
    this.bookingService.emitBookingSubject();
  }

  ngOnDestroy(): void {
    this.bookingSubscription.unsubscribe();
  }

}
