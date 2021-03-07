import { PayementOfDayService } from './../../services/payement-of-day.service';
import { PayementOfDay } from './../../models/payementOfDay.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payement-of-day',
  templateUrl: './payement-of-day.component.html',
  styleUrls: ['./payement-of-day.component.css']
})
export class PayementOfDayComponent implements OnInit {

  @Input() IndexOfPayementOfDay: number;
  @Input() idPayementOfDay: number;
  @Input() firstNamePayementOfDay: string;
  @Input() lastNamePayementOfDay: string;
  @Input() urlPayementOfDay: string;
  @Input() datePayementOfDay: string;

  payementOfDays: PayementOfDay[];

  constructor(private payementOfDayService: PayementOfDayService) { }

  ngOnInit(): void {
  }

  onDeletePayementOfDay(idPayementOfDay) {
    this.payementOfDayService.deletePayementOfDayById(idPayementOfDay).subscribe(
      (payementOfDay: PayementOfDay) => {
        console.log("Payemetn delected", payementOfDay);
        this.payementOfDayService.readListPayementOfDay().subscribe((payementOfDays: PayementOfDay[]) => {
          this.payementOfDays = payementOfDays
        })
      }
    )
  }

}
