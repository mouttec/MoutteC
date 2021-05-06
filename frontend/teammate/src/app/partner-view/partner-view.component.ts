import { Component, OnInit, OnDestroy } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-partner-view',
  templateUrl: './partner-view.component.html',
  styleUrls: ['./partner-view.component.css']
})
export class PartnerViewComponent implements OnInit, OnDestroy {

  partners: any[];
  partnerSubscription: Subscription;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partnerSubscription = this.partnerService.partnerSubject.subscribe(
      (partners: any[]) => {
        this.partners = partners;
      }
    );
    this.partnerService.emitPartnerSubject();
  }

  ngOnDestroy(): void {
    this.partnerSubscription.unsubscribe();
  }

}
