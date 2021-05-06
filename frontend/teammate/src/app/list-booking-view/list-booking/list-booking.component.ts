import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent implements OnInit {

  @Input() indexOfBooking: number;
  @Input() idBooking: number;
  @Input() firstNameCustomer: string;
  @Input() lastNameCustomer: string;
  @Input() phoneCustomer: string;
  @Input() licensePlateCar: string;
  @Input() brandCar: string;
  @Input() modelCar: string;
  @Input() dateOfCirculationCar: string;
  @Input() motorizationCar: string;
  @Input() namePartner: string;
  @Input() formulaBooking: string;
  @Input() dateForth: string;
  @Input() hoursForth: string;
  @Input() dateBack: string;
  @Input() hoursBack: string;
  @Input() addressForth: string;
  @Input() addressBack: string;
  @Input() dateOfBirthdayCustomer: string;
  @Input() mailCustomer: string;
  @Input() durationForth: number;
  @Input() distanceForth: number;
  @Input() durationBack: number;
  @Input() distanceBack: number;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

}
