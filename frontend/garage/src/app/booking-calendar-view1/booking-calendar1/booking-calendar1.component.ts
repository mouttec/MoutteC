import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-calendar1',
  templateUrl: './booking-calendar1.component.html',
  styleUrls: ['./booking-calendar1.component.css']
})
export class BookingCalendar1Component implements OnInit {

  @Input() indexOfBooking: number;
  @Input() idBooking: number;
  @Input() day: string;
  @Input() hours: string;
  @Input() statusCalendar: string;
  @Input() statusBooking: string;
  @Input() statusCar: string;
  @Input() firstNameCustomer: string;
  @Input() lastNameCustomer: string;
  @Input() phoneCustomer: string;
  @Input() mailCustomer: string;
  @Input() dateOfBirthdayCustomer: string;
  @Input() licensePlateCar: string;
  @Input() brandCar: string;
  @Input() modelCar: string;
  @Input() motorizationCar: string;
  @Input() dateOfCirculation: string;
  @Input() addressForth: string;
  @Input() addressBack: string;
  @Input() namePartner: string;
  @Input() formulaBooking: string;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  getStatusCalendar(): string {
    return this.statusCalendar;
  }

  getColorCalendar(): 'none' | '#A7A7A7' | '#EF7B15' {
    if (this.statusCalendar === 'libre') {
      return 'none';
    } else if (this.statusCalendar === 'Block') {
      return '#A7A7A7';
    }
    else if (this.statusCalendar === 'Réserver') {
      return '#EF7B15';
    }
  }

  getOpacityCalendar(): 1| 0.5| 1 {
    if (this.statusCalendar === 'libre') {
      return 1;
    } else if (this.statusCalendar === 'Block') {
      return 0.5;
    }
    else if (this.statusCalendar === 'Réserver') {
      return 1;
    }
  }

}
