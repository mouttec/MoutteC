import { MonthlyPaymentService } from './../../services/monthly-payment.service';
import { MonthlyPayment } from './../../models/monthlyPayments.models';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})
export class MonthlyPaymentComponent implements OnInit {

  @Input() IndexOfMonthlyPayment: number;
  @Input() idMonthlyPayment: number;
  @Input() monthMonthlyPayment: string;
  @Input() urlMonthlyPayment: string;
  @Input() dateMonthlyPayment: string;

  monthlyPayments: MonthlyPayment[];

  constructor(private monthlyPaymentService: MonthlyPaymentService) { }

  ngOnInit(): void {
  }

  onDeleteMonthlyPayment(idMonthlyPayment) {
    this.monthlyPaymentService.deleteMonthlyPaymentById(idMonthlyPayment).subscribe(
      (monthlyPayment: MonthlyPayment) => {
        console.log("monthly payment delected", monthlyPayment);
        this.monthlyPaymentService.reaadListMonthlyPayment().subscribe((monthlyPayments: MonthlyPayment[]) => {
          this.monthlyPayments = monthlyPayments
        })
      }
    )
  }

}
