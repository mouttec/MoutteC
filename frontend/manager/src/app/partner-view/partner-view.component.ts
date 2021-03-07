import { Partner } from './../models/partners.models';
import { PartnerService } from './../services/partner.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-partner-view',
  templateUrl: './partner-view.component.html',
  styleUrls: ['./partner-view.component.css']
})
export class PartnerViewComponent implements OnInit, OnDestroy {

  partners: Partner[];
  partnerSubscription: Subscription;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partnerSubscription = this.partnerService.partnerSubject.subscribe(
      (partners: Partner[]) => {
        this.partners = partners;
      }
    );
    this.partnerService.readListPartner();
  }

  ngOnDestroy(): void {
    this.partnerSubscription.unsubscribe();
  }

}
