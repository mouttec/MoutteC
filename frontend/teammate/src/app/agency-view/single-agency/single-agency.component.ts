import { AgencyService } from 'src/app/services/agency.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-agency',
  templateUrl: './single-agency.component.html',
  styleUrls: ['./single-agency.component.css']
})
export class SingleAgencyComponent implements OnInit {

  // currentAgency = null;
  nameAgency: string;
  addressAgency: string;
  phoneAgency: string;
  mailAgency: string;
  statusAgency: string;
  dateAgency: string;

  constructor(private agencyService: AgencyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idAgency = this.route.snapshot.params['idAgency'];
    this.nameAgency = this.agencyService.getAgencyById(+idAgency).nameAgency;
    this.addressAgency = this.agencyService.getAgencyById(+idAgency).addressAgency;
    this.phoneAgency = this.agencyService.getAgencyById(+idAgency).phoneAgency;
    this.mailAgency = this.agencyService.getAgencyById(+idAgency).mailAgency;
    this.statusAgency = this.agencyService.getAgencyById(+idAgency).statusAgency;
    this.dateAgency = this.agencyService.getAgencyById(+idAgency).dateAgency;
  }

}
