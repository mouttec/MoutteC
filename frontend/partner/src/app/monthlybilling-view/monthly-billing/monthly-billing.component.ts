import { Component, Input, OnInit } from '@angular/core';
import { MonthyBillingService } from 'src/app/services/monthy-billing.service';

@Component({
  selector: 'app-monthly-billing',
  templateUrl: './monthly-billing.component.html',
  styleUrls: ['./monthly-billing.component.css']
})
export class MonthlyBillingComponent implements OnInit {

  @Input() indexOfMonthlyBilling: number;
  @Input() idMonthlyBilling: number;
  @Input() nameMonthly: string;
  @Input() urlMonthly: string;

  constructor(private monthlyBilling: MonthyBillingService) { }

  ngOnInit(): void {
  }

}
