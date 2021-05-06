import { Component, Input, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  @Input() indexOfPartner: number;
  @Input() idPartner: string;
  @Input() usernamePartner: string;
  @Input() password: string;
  @Input() namePartner: string;
  @Input() addressPartner: string;
  @Input() phonePartner: string;
  @Input() statusPartner: string;
  @Input() typePartner: string;
  @Input() mailPartner: string;
  @Input() nameBilling: string;
  @Input() siretPartner: string;
  @Input() addressBilling: string;
  @Input() datePartner: string;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
  }

  getStatusPartner(): string {
    return this.statusPartner;
  }

  getOpacityPartner(): 1| 0.5 {
    if (this.statusPartner === 'Partenaire') {
      return 1;
    } else if (this.statusPartner === 'Non partenaire') {
      return 0.5;
    }
  }

  getColorPartner(): 'black' | '#A7A7A7' {
    if (this.statusPartner === 'Partenaire') {
      return 'black';
    }else if (this.statusPartner === 'Non partenaire') {
      return '#A7A7A7';
    }
  }

  onSwitchPartner(): void {
    this.partnerService.switchPartnerActivate(this.indexOfPartner);
  }

  onSwitchNoPartner(): void {
    this.partnerService.switchNoPartner(this.indexOfPartner);
  }

}
