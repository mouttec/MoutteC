import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/bookings.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-calendar-forms',
  templateUrl: './booking-calendar-forms.component.html',
  styleUrls: ['./booking-calendar-forms.component.css']
})
export class BookingCalendarFormsComponent implements OnInit {

  bookingForm: FormGroup;
  bookings: Booking [];
  bookingSuscription: Subscription;

  constructor(private bookingService: BookingService, private router: Router, private formBuilder: FormBuilder) { }

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
      day: ['', Validators.required],
      hours: ['', Validators.required],
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
      formulaBooking: ['', Validators.required],
      addressForth: '',
      addressBack: '',
      namePartner: '',
      statusCalendar: '',
      statusBooking: '',
      statusCar: '',
      idBooking: ''
      }
    );
  }
  onSubmitFormBooking(): void {
    const formValue = this.bookingForm.value;
    const newBooking = new Booking (
      formValue['day'],
      formValue['hours'],
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
      formValue['formulaBooking'],
      formValue['addressForth'],
      formValue['addressBack'],
      formValue['namePartner'],
      formValue['statusCalendar'],
      formValue['statusBooking'],
      formValue['statusCar']
    );
    newBooking.idBooking = this.bookings[(this.bookings.length - 1)].idBooking + 1;
    // this.bookingService.addBooking(newBooking);
    this.router.navigate(['/booking']);
    this.rebuildFormBooking();
  }

  rebuildFormBooking(): void {
    this.bookingForm.reset(
      {
        day: '',
        hours: '',
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
        formulaBooking: '',
        addressForth: '',
        addressBack: '',
        namePartner: '',
        statusCalendar: '',
        statusBooking: '',
        statusCar: '',
        idBooking: ''
      }
    );
  }
}
