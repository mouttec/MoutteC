import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MonthyBillingService } from 'src/app/services/monthy-billing.service';

@Component({
  selector: 'app-monthlybilling-view',
  templateUrl: './monthlybilling-view.component.html',
  styleUrls: ['./monthlybilling-view.component.css']
})
export class MonthlybillingViewComponent implements OnInit, OnDestroy {

  monthyBillings: any[];
  monthyBillingSubscription: Subscription;

  constructor(private monthlyBillingService: MonthyBillingService) { }

  ngOnInit(): void {
    this.monthyBillingSubscription = this.monthlyBillingService.monthlyBillingSubject.subscribe(
      (monthyBillings: any[]) => {
        this.monthyBillings = monthyBillings;
      }
    );
    this.monthlyBillingService.emitMonthlyBillingSubject();
  }

  ngOnDestroy(): void {
    this.monthyBillingSubscription.unsubscribe();

  }

}
