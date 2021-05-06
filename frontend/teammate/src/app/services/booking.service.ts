import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Booking } from '../models/bookings.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingSubject = new Subject<any[]>();

  private bookings: Booking[] = [
    {
      namePartner: "midas",
      formulaBooking: "Round",
      addressForth: "61 boulevard bonnes graces 13003 marseille",
      addressBack: "61 boulevard bonnes graces 13003 marseille",
      firstNameCustomer: "name customer",
      lastNameCustomer: "lastname customer",
      phoneCustomer: "00000000",
      mailCustomer: "test@test.com",
      dateOfBirthdayCustomer: "00000",
      licensePlateCar: "aa-000-aa",
      brandCar: "marquue",
      modelCar: "model",
      dateOfCirculationCar: "01/01/01",
      motorizationCar: "4cv",
      dateForth: "11/04/2021",
      hoursForth: "10:00",
      dateBack: "11/04/2021",
      hoursBack: "19:00",
      idBooking: 1
    }
  ];

  constructor() { }

  emitBookingSubject(): void {
    this.bookingSubject.next(this.bookings.slice());
  }

  addBooking(booking: Booking): void {
    this.bookings.push(booking);
    this.emitBookingSubject();
  }

  getbookingById(idBooking: number): any {
    const booking =  this.bookings.find(
      (bookingObject) => {
        return bookingObject.idBooking === idBooking;
      }
    );
    return booking;
  }
}
