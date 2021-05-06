import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-single-booking',
  templateUrl: './single-booking.component.html',
  styleUrls: ['./single-booking.component.css']
})
export class SingleBookingComponent implements OnInit {

  firstNameCustomer: string;
  lastNameCustomer: string;
  mailCustomer: string;
  phoneCustomer: string;
  dateOfBirthdayCustomer: string;
  licensePlateCar: string;
  brandCar: string;
  modelCar: string;
  motorizationCar: string;
  dateOfCirculationCar: string;
  formulaBooking: string;
  namePartner: string;
  addressForth: string;
  addressBack: string;
  dateForth: string;
  hoursForth: string;
  dateBack: string;
  hoursBack: string;

  constructor(private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idBooking = this.route.snapshot.params['idBooking'];
    this.firstNameCustomer = this.bookingService.getbookingById(+idBooking).firstNameCustomer;
    this.lastNameCustomer = this.bookingService.getbookingById(+idBooking).lastNameCustomer;
    this.mailCustomer = this.bookingService.getbookingById(+idBooking).mailCustomer;
    this.phoneCustomer = this.bookingService.getbookingById(+idBooking).phoneCustomer;
    this.dateOfBirthdayCustomer = this.bookingService.getbookingById(+idBooking).dateOfBirthdayCustomer;
    this.licensePlateCar = this.bookingService.getbookingById(+idBooking).licensePlateCar;
    this.brandCar = this.bookingService.getbookingById(+idBooking).brandCar;
    this.modelCar = this.bookingService.getbookingById(+idBooking).modelCar;
    this.motorizationCar = this.bookingService.getbookingById(+idBooking).motorizationCar;
    this.dateOfCirculationCar = this.bookingService.getbookingById(+idBooking).dateOfCirculationCar;
    this.formulaBooking = this.bookingService.getbookingById(+idBooking).formulaBooking;
    this.namePartner  = this.bookingService.getbookingById(+idBooking).namePartner;
    this.addressForth = this.bookingService.getbookingById(+idBooking).addressForth;
    this.addressBack = this.bookingService.getbookingById(+idBooking).addressBack;
    this.dateForth = this.bookingService.getbookingById(+idBooking).dateForth;
    this.hoursForth = this.bookingService.getbookingById(+idBooking).hoursForth;
    this.dateBack = this.bookingService.getbookingById(+idBooking).dateBack;
    this.hoursBack = this.bookingService.getbookingById(+idBooking).hoursBack;
  }

}
