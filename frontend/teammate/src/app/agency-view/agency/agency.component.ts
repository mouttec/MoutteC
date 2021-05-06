import { Component, Input, OnInit } from '@angular/core';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  @Input() indexOfAgency: number;
  @Input() idAgency: number;
  @Input() nameAgency: string;
  @Input() addressAgency: string;
  @Input() phoneAgency: string;
  @Input() mailAgency: string;
  @Input() statusAgency: string;
  @Input() dateAgency: string;

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
  }

  getStatusAgency(): string {
    return this.statusAgency;
  }

  getOpacityAgency(): 1| 0.5 {
    if (this.statusAgency === 'Ouvert') {
      return 1;
    } else if (this.statusAgency === 'Fermer') {
      return 0.5;
    }
  }

  getColorAgency(): 'black' | '#A7A7A7' {
    if (this.statusAgency === 'Ouvert') {
      return 'black';
    } else if (this.statusAgency === 'Fermer') {
      return '#A7A7A7';
    }
  }

  onSwitchAgency(): void {
    this.agencyService.switchAgencyOpen(this.indexOfAgency);
  }

  onSwitchNoAgency(): void {
    this.agencyService.switchAgencyClose(this.indexOfAgency);
  }

}
