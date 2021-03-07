import { Subscription } from 'rxjs';
import { PayementOfDayService } from './../services/payement-of-day.service';
import { PayementOfDay } from './../models/payementOfDay.models';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-payement-of-day-view',
  templateUrl: './payement-of-day-view.component.html',
  styleUrls: ['./payement-of-day-view.component.css']
})
export class PayementOfDayViewComponent implements OnInit, OnDestroy {

  payementsOfDays: PayementOfDay[];
  payementOfDaySubscription: Subscription;

  constructor(private payementOfDayService: PayementOfDayService) { }

  ngOnInit(): void {
    // this.payementOfDaySubscription = this.payementOfDayService.payementOfDaySubject.subscribe(
    //   (payementOfDays: PayementOfDay[]) => {
    //     this.payementsOfDays = payementOfDays;
    //   }
    // );
    // this.payementOfDayService.readListPayementOfDay();
  }

  ngOnDestroy(): void {
    // this.payementOfDaySubscription.unsubscribe();
  }

}
