import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from '../../models/bookings.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-booking-forms',
  templateUrl: './booking-forms.component.html',
  styleUrls: ['./booking-forms.component.css']
})
export class BookingFormsComponent implements OnInit {

  bookingForm: FormGroup;
  bookings: Booking [];
  bookingSuscription: Subscription;

  constructor(private bookingService: BookingService, private router: Router, private formBuilder: FormBuilder, private partnerService: PartnerService) { }

  partners = this.partnerService.emitPartnerSubject();

  ngOnInit(): void {
    this.bookingSuscription = this.bookingService.bookingSubject.subscribe(
      (bookings: Booking[]) => {
        this.bookings = bookings;
      }
    );
    this.bookingService.emitBookingSubject();
    this.initFormBooking();
  }

  initFormBooking(): void {
    this.bookingForm = this.formBuilder.group(
      {
        formulaBooking: ['', Validators.required],
        namePartner: ['', Validators.required],
        addressForth: ['', Validators.required],
        addressBack: ['', Validators.required],
        firstNameCustomer: ['', Validators.required],
        lastNameCustomer: ['', Validators.required],
        phoneCustomer: ['', Validators.required],
        mailCustomer: '',
        dateOfBirthdayCustomer: '',
        licensePlateCar: ['', Validators.required],
        brandCar: ['', Validators.required],
        modelCar: ['', Validators.required],
        motorizationCar: ['', Validators.required],
        dateOfCirculationCar: ['', Validators.required],
        dateForth: ['', Validators.required],
        hoursForth: ['', Validators.required],
        dateBack: ['', Validators.required],
        hoursBack: ['', Validators.required],
        idBooking: ''
      }
    );
  }

  onSubmitFormBooking(): void {
    const formValue = this.bookingForm.value;
    const newBooking = new Booking (
      formValue['formulaBooking'],
      formValue['namePartner'],
      formValue['addressForth'],
      formValue['addressBack'],
      formValue['firstNameCustomer'],
      formValue['lastNameCustomer'],
      formValue['phoneCustomer'],
      formValue['mailCustomer'],
      formValue['dateOfBirthdayCustomer'],
      formValue['licensePlateCar'],
      formValue['brandCar'],
      formValue['modelCar'],
      formValue['motorizationCar'],
      formValue['dateOfCirculationCar'],
      formValue['dateForth'],
      formValue['hoursForth'],
      formValue['dateBack'],
      formValue['hoursBack']
    );
    newBooking.idBooking = this.bookings[(this.bookings.length - 1)].idBooking + 1;
    this.bookingService.addBooking(newBooking);
    this.router.navigate(['/booking']);
    this.rebuildFormBooking();
  }

  rebuildFormBooking(): void {
    this.bookingForm.reset(
      {
        formulaBooking: '',
        namePartner: '',
        addressForth: '',
        addressBack: '',
        firstNameCustomer: '',
        lastNameCustomer: '',
        phoneCustomer: '',
        mailCustomer: '',
        dateOfBirthdayCustomer: '',
        licensePlateCar: '',
        brandCar: '',
        modelCar: '',
        motorizationCar: '',
        dateOfCirculationCar: '',
        dateForth: '',
        hoursForth: '',
        dateBack: '',
        hoursBack: '',
        idBooking: ''
      }
    );
  }

}
