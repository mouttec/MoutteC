import { Subscription } from 'rxjs';
import { MonthlyPaymentService } from './../services/monthly-payment.service';
import { MonthlyPayment } from './../models/monthlyPayments.models';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-monthly-payment-view',
  templateUrl: './monthly-payment-view.component.html',
  styleUrls: ['./monthly-payment-view.component.css']
})
export class MonthlyPaymentViewComponent implements OnInit, OnDestroy {

  monthlyPayments: MonthlyPayment[];
  monthlyPaymentSubscription: Subscription;

  constructor(private monthlyPaymentService: MonthlyPaymentService) { }

  ngOnInit(): void {}
  //   this.monthlyPaymentSubscription = this.monthlyPaymentService.monthlyPaymentSubject.subscribe(
  //     (monthlyPayments: MonthlyPayment[]) => {
  //       this.monthlyPayments = monthlyPayments;
  //     }
  //   );
  //   this.monthlyPaymentService.reaadListMonthlyPayment();
  // }

  ngOnDestroy(): void {}
  //   this.monthlyPaymentSubscription.unsubscribe();
  // }
}
