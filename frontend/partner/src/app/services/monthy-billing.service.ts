import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MonthlyBilling } from 'src/app/models/monthyBilling.model';

@Injectable({
  providedIn: 'root'
})
export class MonthyBillingService {

  monthlyBillingSubject = new Subject<any[]>();

  private monthyBillings: MonthlyBilling [] = [
    {
      urlMonthly: '/janvier',
      nameMonthly: 'Janvier',
      idMonthlyBilling: 1
    }
  ];

  constructor() { }

  emitMonthlyBillingSubject(): void {
    this.monthlyBillingSubject.next(this.monthyBillings.slice());
  }
  getMonthlyBillingById(idMonthlyBilling: number): any {
    const monthlyBilling = this.monthyBillings.find(
      (monthlyBillingObject) => {
        return monthlyBillingObject.idMonthlyBilling === idMonthlyBilling;
      }
    );
    return monthlyBilling;
  }
}
