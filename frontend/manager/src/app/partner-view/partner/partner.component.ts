import { Partner } from './../../models/partners.models';
import { PartnerService } from './../../services/partner.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  @Input() IndexOfPartner: number;
  @Input() idPartner: number;
  @Input() namePartner: string;
  @Input() numberAddressPartner: string;
  @Input() typeAddressPartner: string;
  @Input() nameAddressPartner: string;
  @Input() complementAddressPartner: string;
  @Input() zipAddressPartner: number;
  @Input() cityAddressPartner: string;
  @Input() phonePartner: string;
  @Input() statusPartner: string;
  @Input() mailPartner: string;
  @Input() nameBilling: string;
  @Input() siretPartner: string;
  @Input() numberAddressBilling: string;
  @Input() typeAddressBilling: string;
  @Input() nameAddressBilling: string;
  @Input() complementAddressBilling: string;
  @Input() zipAddressBilling: number;
  @Input() cityAddressBilling: string;
  @Input() datePartner: string;

  partners: Partner[];

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
  }

  getStatusPartner(): string {
    return this.statusPartner;
  }

  getOpacityPartner(): 1| 0.5 {
    if (this.statusPartner === 'Partneaire') {
      return 1;
    } else if (this.statusPartner === 'Non partenaire') {
      return 0.5;
    }
  }

  getColorPartner(): 'black' | '#b1b1b1' {
    if (this.statusPartner === 'Partenaire') {
      return 'black';
    } else if (this.statusPartner === 'Non partenaire') {
      return '#b1b1b1';
    }
  }

  onSwitchPartner(): void {
    this.partnerService.switchPartnerActivate(this.IndexOfPartner);
  }

  onSwitchNoPartner(): void {
    this.partnerService.switchNoPartner(this.IndexOfPartner);
  }

  onDeletePartner(idPartner) {
    this.partnerService.deletePartnerById(idPartner)
    .subscribe(
      (partner: Partner) => {
        console.log("Partner delected ", partner);
        this.partnerService.readListPartner().subscribe((partners: Partner[]) => {
          this.partners = partners
        })
      }
    )}
}
