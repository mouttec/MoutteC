import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AgencyService } from './../services/agency.service';

@Component({
  selector: 'app-agency-view',
  templateUrl: './agency-view.component.html',
  styleUrls: ['./agency-view.component.css']
})
export class AgencyViewComponent implements OnInit, OnDestroy {

  agencies: any[];
  agencySubscription: Subscription;

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.agencySubscription = this.agencyService.agencySubject.subscribe(
      (agencies: any[]) => {
        this.agencies = agencies;
      }
    );
    this.agencyService.emitAgencySubject();
  }

  ngOnDestroy(): void {
    this.agencySubscription.unsubscribe();
  }

}
