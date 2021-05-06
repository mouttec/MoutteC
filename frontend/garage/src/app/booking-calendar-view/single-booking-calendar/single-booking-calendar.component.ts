import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-booking-calendar',
  templateUrl: './single-booking-calendar.component.html',
  styleUrls: ['./single-booking-calendar.component.css']
})
export class SingleBookingCalendarComponent implements OnInit {

  indexOfBooking: number;
  idBooking: number;
  day: string;
  hours: string;
  statusCalendar: string;
  statusBooking: string;
  statusCar: string;
  firstNameCustomer: string;
  lastNameCustomer: string;
  phoneCustomer: string;
  mailCustomer: string;
  dateOfBirthdayCustomer: string;
  licensePlateCar: string;
  brandCar: string;
  modelCar: string;
  motorizationCar: string;
  dateOfCirculation: string;
  addressForth: string;
  addressBack: string;
  namePartner: string;
  formulaBooking: string;

  constructor(private bookingService: BookingService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idBooking = this.route.snapshot.params['idBooking'];
    this.day =this.bookingService.getBookingById(+idBooking).day;
    this.hours =this.bookingService.getBookingById(+idBooking).hours;
    this.statusCalendar =this.bookingService.getBookingById(+idBooking).statusCalendar;
    this.statusBooking =this.bookingService.getBookingById(+idBooking).statusBooking;
    this.statusCar =this.bookingService.getBookingById(+idBooking).statusCar;
    this.firstNameCustomer =this.bookingService.getBookingById(+idBooking).firstNameCustomer;
    this.lastNameCustomer =this.bookingService.getBookingById(+idBooking).lastNameCustomer;
    this.phoneCustomer =this.bookingService.getBookingById(+idBooking).phoneCustomer;
    this.mailCustomer =this.bookingService.getBookingById(+idBooking).mailCustomer;
    this.dateOfBirthdayCustomer =this.bookingService.getBookingById(+idBooking).dateOfBirthdayCustomer;
    this.licensePlateCar =this.bookingService.getBookingById(+idBooking).licensePlateCar;
    this.brandCar =this.bookingService.getBookingById(+idBooking).brandCar;
    this.modelCar =this.bookingService.getBookingById(+idBooking).modelCar;
    this.motorizationCar =this.bookingService.getBookingById(+idBooking).motorizationCar;
    this.dateOfCirculation =this.bookingService.getBookingById(+idBooking).dateOfCirculation;
    this.addressForth =this.bookingService.getBookingById(+idBooking).addressForth;
    this.addressBack =this.bookingService.getBookingById(+idBooking).addressBack;
    this.namePartner =this.bookingService.getBookingById(+idBooking).namePartner;
    this.formulaBooking =this.bookingService.getBookingById(+idBooking).formulaBooking;
  }

}
