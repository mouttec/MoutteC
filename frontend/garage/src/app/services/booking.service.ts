import { Injectable } from '@angular/core';
import { Booking } from 'src/app/models/bookings.model';
import { Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingSubject = new Subject<any[]>();
  PHP_API_SERVER = "http://localhost:8888/MoutteCAPI/backend/api/booking";
  private bookings: Booking[]

  constructor(private httpClient: HttpClient) { }

  emitBookingSubject(): void {
    this.bookingSubject.next(this.bookings.slice());
  }

  readListCalendar(): Observable<Booking[]>{
    this.httpClient.get<Booking[]>(`${this.PHP_API_SERVER}/listCalendar.php`).subscribe(
      (reponse) => {
        this.bookings = reponse;
        this.emitBookingSubject();
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
    return this.httpClient.get<Booking[]>(`${this.PHP_API_SERVER}/listCalendar.php`);
  }

  // getUser(): Observable<any> {
  //   return this.httpClient.get<Booking[]>(`${this.PHP_API_SERVER}/listCalendar.php`)
  //   .pipe(map(response => {
  //       return {
  //         "data": {
  //           "id": response.firstNameCustomer,
  //           "name": response.lastNameCustomer,
  //           "birthDate": new Date(response.day),
  //           "subscriptionDate": new Date(response.hours)
  //           }
  //         }
  //       }
  //   ))
  //     };

  getBookingById(idBooking: number): any {
    const booking = this.bookings.find(
      (bookingObject) => {
        return bookingObject.idBooking === idBooking;
      }
    );
    return booking;
  }

  // updateManager(booking: Booking) {
  //   this.httpClient.put(`${this.PHP_API_SERVER}/updateManager.php`, booking).subscribe(
  //     () => {
  //       console.log('enregistrement ok');
  //     },
  //     (error) => {
  //       console.log('erreur de sauvegarde' + error);
  //     }
  //   );
  // }

  // searchBooking(day: string, hours: string): void {
  //   this.managers[index].statusManager = 'Activer';
  //   this.updateManager(this.managers[index]);
  // }
}
