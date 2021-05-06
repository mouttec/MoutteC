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
  @Input() dateForth: string;
  @Input() hoursForth: string;
  @Input() dateOfBirthdayCustomer: string;
  @Input() mailCustomer: string;
  @Input() urlGrayCard: string;

  constructor() { }

  ngOnInit(): void {
  }

}
