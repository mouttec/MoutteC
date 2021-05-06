import { Component, OnInit } from '@angular/core';
import { Agency } from '../../models/agencies.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AgencyService } from 'src/app/services/agency.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-agency',
  templateUrl: './update-agency.component.html',
  styleUrls: ['./update-agency.component.css']
})
export class UpdateAgencyComponent implements OnInit {

  nameAgency: string;
  numberAddressAgency: string;
  typeAddressAgency: string;
  nameAddressAgency: string;
  complementAddressAgency: string;
  zipAddressAgency: number;
  cityAddressAgency: string;
  phoneAgency: string;
  mailAgency: string;
  statusAgency: string;
  dateAgency: string;

  agencyForm: FormGroup;
  agencies: Agency[];
  agencySubscription: Subscription;

  constructor(private agencyService: AgencyService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const idAgency = this.route.snapshot.params['idAgency'];
    this.nameAgency = this.agencyService.getAgencyById(+idAgency).nameAgency;
    this.numberAddressAgency = this.agencyService.getAgencyById(+idAgency).numberAddressAgency;
    this.typeAddressAgency = this.agencyService.getAgencyById(+idAgency).typeAddressAgency;
    this.nameAddressAgency = this.agencyService.getAgencyById(+idAgency).nameAddressAgency;
    this.complementAddressAgency = this.agencyService.getAgencyById(+idAgency).complementAddressAgency;
    this.zipAddressAgency = this.agencyService.getAgencyById(+idAgency).zipAddressAgency;
    this.cityAddressAgency = this.agencyService.getAgencyById(+idAgency).cityAddressAgency;
    this.phoneAgency = this.agencyService.getAgencyById(+idAgency).phoneAgency;
    this.mailAgency = this.agencyService.getAgencyById(+idAgency).mailAgency;
    this.statusAgency = this.agencyService.getAgencyById(+idAgency).statusAgency;
    this.dateAgency = this.agencyService.getAgencyById(+idAgency).dateAgency;

    this.agencySubscription = this.agencyService.agencySubject.subscribe(
      (agencies: Agency[]) => {
        this.agencies = agencies;
      }
    );
    this.agencyService.emitAgencySubject();
  }

}
