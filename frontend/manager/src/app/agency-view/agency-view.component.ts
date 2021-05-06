import { AgencyService } from '../services/agency.service';
import { Agency } from '../models/agencies.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-agency-view',
  templateUrl: './agency-view.component.html',
  styleUrls: ['./agency-view.component.css']
})
export class AgencyViewComponent implements OnInit, OnDestroy {

  agencies: Agency[];
  agencySubscription: Subscription;

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.agencySubscription = this.agencyService.agencySubject.subscribe(
      (agencies: Agency[]) => {
        this.agencies = agencies;
      }
    );
  }

  ngOnDestroy(): void {
    this.agencySubscription.unsubscribe();
  }
}
