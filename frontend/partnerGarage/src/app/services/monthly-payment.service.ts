import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { MonthlyPayment } from './../models/monthlyPayments.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthlyPaymentService {

  monthlyPaymentSubject = new Subject<MonthlyPayment[]>();
  PHP_API_SERVER = "http://localhost:8888/MoutteC/backend/api/partnerGarage";
  private monthlyPayments: MonthlyPayment[];

  constructor(private httpClient: HttpClient) { }

  emitMonthlyPaymentSubject() {
    this.monthlyPaymentSubject.next(this.monthlyPayments);
  }

  reaadListMonthlyPayment(): Observable<MonthlyPayment[]> {
    this.httpClient.get<MonthlyPayment[]>(`${this.PHP_API_SERVER}/readListMonthlyPayment.php`).subscribe(
      (reponse) => {
        this.monthlyPayments = reponse;
        this.emitMonthlyPaymentSubject();
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
    return this.httpClient.get<MonthlyPayment[]>(`${this.PHP_API_SERVER}/readListMonthlyPayment.php`);
  }

  deleteMonthlyPaymentById(idMonthlyPayment: number) {
    return this.httpClient.delete<MonthlyPayment>(`${this.PHP_API_SERVER}/deleteMonthlyPayment.php/?idMonthlyPayment=${idMonthlyPayment}`);
  }

  getMonthlyPayment(idMonthlyPayment: any): Observable<any> {
    return this.httpClient.get(`${this.PHP_API_SERVER}/readSingleMonthlyPayment.php/?idMonthlyPayment=${idMonthlyPayment}`);
  }
}
