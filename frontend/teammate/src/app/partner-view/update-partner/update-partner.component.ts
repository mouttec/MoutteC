import { Component, OnInit } from '@angular/core';
import { Partner } from '../../models/partners.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-update-partner',
  templateUrl: './update-partner.component.html',
  styleUrls: ['./update-partner.component.css']
})
export class UpdatePartnerComponent implements OnInit {

  usernamePartner: string;
  password: string;
  namePartner: string;
  numberAddressPartner: string;
  typeAddressPartner: string;
  nameAddressPartner: string;
  complementAddressPartner: string;
  zipAddressPartner: number;
  cityAddressPartner: string;
  phonePartner: string;
  statusPartner: string;
  typePartner: string;
  mailPartner: string;
  nameBilling: string;
  siretPartner: string;
  numberAddressBilling: string;
  typeAddressBilling: string;
  nameAddressBilling: string;
  complementAddressBilling: string;
  zipAddressBilling: string;
  cityAddressBilling: string;
  datePartner: string;

  partnerForm: FormGroup;
  partners: Partner[];
  partnerSubscription: Subscription;


  constructor(private partnerService: PartnerService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const idPartner = this.route.snapshot.params['idPartner'];
    this.usernamePartner = this.partnerService.getPartnerById(+idPartner).usernamePartner;
    this.password = this.partnerService.getPartnerById(+idPartner).password;
    this.namePartner = this.partnerService.getPartnerById(+idPartner).namePartner;
    this.numberAddressPartner = this.partnerService.getPartnerById(+idPartner).numberAddressPartner;
    this.typeAddressPartner = this.partnerService.getPartnerById(+idPartner).typeAddressPartner;
    this.nameAddressPartner = this.partnerService.getPartnerById(+idPartner).nameAddressPartner;
    this.complementAddressPartner = this.partnerService.getPartnerById(+idPartner).complementAddressPartner;
    this.zipAddressPartner = this.partnerService.getPartnerById(+idPartner).zipAddressPartner;
    this.cityAddressPartner = this.partnerService.getPartnerById(+idPartner).cityAddressPartner;
    this.phonePartner = this.partnerService.getPartnerById(+idPartner).phonePartner;
    this.statusPartner = this.partnerService.getPartnerById(+idPartner).statusPartner;
    this.typePartner = this.partnerService.getPartnerById(+idPartner).typePartner;
    this.mailPartner = this.partnerService.getPartnerById(+idPartner).mailPartner;
    this.nameBilling = this.partnerService.getPartnerById(+idPartner).nameBilling;
    this.siretPartner = this.partnerService.getPartnerById(+idPartner).siretPartner;
    this.numberAddressBilling = this.partnerService.getPartnerById(+idPartner).numberAddressBilling;
    this.typeAddressBilling = this.partnerService.getPartnerById(+idPartner).typeAddressBilling;
    this.nameAddressBilling = this.partnerService.getPartnerById(+idPartner).nameAddressBilling;
    this.complementAddressBilling = this.partnerService.getPartnerById(+idPartner).complementAddressBilling;
    this.zipAddressBilling = this.partnerService.getPartnerById(+idPartner).zipAddressBilling;
    this.cityAddressBilling = this.partnerService.getPartnerById(+idPartner).cityAddressBilling;
    this.datePartner = this.partnerService.getPartnerById(+idPartner).datePartner;

    this.partnerSubscription = this.partnerService.partnerSubject.subscribe(
      (partners: Partner[]) => {
        this.partners = partners;
      }
    );
    this.partnerService.emitPartnerSubject();
  }

}
