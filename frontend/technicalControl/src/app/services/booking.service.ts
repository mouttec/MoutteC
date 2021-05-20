import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Booking } from '../models/bookings.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingSubject = new Subject<any[]>();
  PHP_API_SERVER = 'http://localhost:8888/MoutteC/backend/api/booking/listBooking.php';
  private bookings: Booking[];

  constructor(private httpClient: HttpClient) { }

  emitBookingSubject(): void {
    this.bookingSubject.next(this.bookings);
  }

  readListBooking(): Observable<Booking[]>{
    this.httpClient.get<Booking[]>(`${this.PHP_API_SERVER}`).subscribe(
      (reponse) => {
        this.bookings = reponse;
        this.emitBookingSubject();
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
    return this.httpClient.get<Booking[]>(`${this.PHP_API_SERVER}`);
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
