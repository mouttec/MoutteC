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
      firstNameCustomer: "Test1 firstName",
      lastNameCustomer: "Test1 lastName",
      phoneCustomer: "00000000",
      mailCustomer: "test1@test.com",
      dateOfBirthdayCustomer: "dd/mm/yyyy",
      licensePlateCar: "aa-000-aa",
      brandCar: "marque",
      modelCar: "model",
      dateOfCirculationCar: "01/01/01",
      motorizationCar: "4cv",
      dateForth: "20/04/2021",
      hoursForth: "10:00",
      urlGrayCard: '../../assets/carteGrise/1.png',
      idBooking: 1
    },
    {
      firstNameCustomer: "Test2 firstName",
      lastNameCustomer: "Test2 lastName",
      phoneCustomer: "00000000",
      mailCustomer: "test2@test.com",
      dateOfBirthdayCustomer: "dd/mm/yyyy",
      licensePlateCar: "bb-000-bb",
      brandCar: "marque",
      modelCar: "model",
      dateOfCirculationCar: "01/01/01",
      motorizationCar: "4cv",
      dateForth: "21/04/2021",
      hoursForth: "10:00",
      urlGrayCard: '../../assets/carteGrise/2.png',
      idBooking: 2
    },
    {
      firstNameCustomer: "Test3 firstName",
      lastNameCustomer: "Test3 lastName",
      phoneCustomer: "00000000",
      mailCustomer: "test3@test.com",
      dateOfBirthdayCustomer: "dd/mm/yyyy",
      licensePlateCar: "cc-000-cc",
      brandCar: "marque",
      modelCar: "model",
      dateOfCirculationCar: "01/01/01",
      motorizationCar: "4cv",
      dateForth: "22/04/2021",
      hoursForth: "10:00",
      urlGrayCard: '../../assets/carteGrise/3.png',
      idBooking: 3
    }
  ];

  constructor() { }

  emitBookingSubject(): void {
    this.bookingSubject.next(this.bookings.slice());
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
