import { HttpClient } from '@angular/common/http';
import { PayementOfDay } from './../models/payementOfDay.models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayementOfDayService {

payementOfDaySubject = new Subject<PayementOfDay[]>();
PHP_API_SERVER = "http://localhost:8888/MoutteC/backend/api/partnerGarage";
private payementOfDays: PayementOfDay[];

  constructor(private httpClient: HttpClient) { }

  emitPayementOfDaySubject() {
    this.payementOfDaySubject.next(this.payementOfDays);
  }

  readListPayementOfDay(): Observable<PayementOfDay[]> {
    this.httpClient.get<PayementOfDay[]>(`${this.PHP_API_SERVER}/readListPayementOfDay.php`).subscribe(
      (reponse) => {
        this.payementOfDays = reponse;
        this.emitPayementOfDaySubject();
      },
      (error) => {
        console.log('erreur de sauvegarade' + error);
      }
    );
    return this.httpClient.get<PayementOfDay[]>(`${this.PHP_API_SERVER}/this.readListPayementOfDay.php`);
  }

  deletePayementOfDayById(idPayementOfDay: number) {
    return this.httpClient.delete<PayementOfDay>(`${this.PHP_API_SERVER}/deletePayementOfDay.php/?idPayementOfDay=${idPayementOfDay}`);
  }

  getPayementOdDayById(idPayementOfDay: any): Observable<any> {
    return this.httpClient.get(`${this.PHP_API_SERVER}/readSinglePayementOfDay.php/?idPayementOfDay=${idPayementOfDay}`);
  }
}
