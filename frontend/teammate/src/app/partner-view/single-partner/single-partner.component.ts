import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-single-partner',
  templateUrl: './single-partner.component.html',
  styleUrls: ['./single-partner.component.css']
})
export class SinglePartnerComponent implements OnInit {

  usernamePartner: string;
  password: string;
  namePartner: string;
  addressPartner: string;
  phonePartner: string;
  statusPartner: string;
  typePartner: string;
  mailPartner: string;
  nameBilling: string;
  siretPartner: string;
  addressBilling: string;
  datePartner: string;

  constructor(private partnerService: PartnerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idPartner = this.route.snapshot.params['idPartner'];
    this.usernamePartner = this.partnerService.getPartnerById(+idPartner).usernamePartner;
    this.password = this.partnerService.getPartnerById(+idPartner).password;
    this.namePartner = this.partnerService.getPartnerById(+idPartner).namePartner;
    this.addressPartner = this.partnerService.getPartnerById(+idPartner).addressPartner;
    this.phonePartner = this.partnerService.getPartnerById(+idPartner).phonePartner;
    this.statusPartner = this.partnerService.getPartnerById(+idPartner).statusPartner;
    this.typePartner = this.partnerService.getPartnerById(+idPartner).typePartner;
    this.mailPartner = this.partnerService.getPartnerById(+idPartner).mailPartner;
    this.nameBilling = this.partnerService.getPartnerById(+idPartner).nameBilling;
    this.siretPartner = this.partnerService.getPartnerById(+idPartner).siretPartner;
    this.addressBilling = this.partnerService.getPartnerById(+idPartner).addressBilling;
    this.datePartner = this.partnerService.getPartnerById(+idPartner).datePartner;
  }
}
