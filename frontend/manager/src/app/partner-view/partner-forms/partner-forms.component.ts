import { PartnerService } from './../../services/partner.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Partner } from './../../models/partners.models';

@Component({
  selector: 'app-partner-forms',
  templateUrl: './partner-forms.component.html',
  styleUrls: ['./partner-forms.component.css']
})
export class PartnerFormsComponent implements OnInit {

  partnerForm: FormGroup;
  partners: Partner[];
  partnerSusbcripiton: Subscription;

  constructor(private partnerService: PartnerService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.partnerSusbcripiton = this.partnerService.partnerSubject.subscribe(
      (partners: Partner[]) => {
        this.partners = partners;
      }
    );
    this.partnerService.readListPartner();
    this.initFormPartner();
  }

  initFormPartner(): void {
    this.partnerForm = this.formBuilder.group(
      {
        idPartner: '',
        namePartner: ['', Validators.required],
        numberAddressPartner: ['', Validators.required],
        typeAddressPartner: ['', Validators.required],
        nameAddressPartner: ['', Validators.required],
        complementAddressPartner: ['', Validators.required],
        zipAddressPartner: ['', Validators.required],
        cityAddresPartner: ['', Validators.required],
        phonePartner: ['', Validators.required],
        statusPartner: ['', Validators.required],
        mailPartner: ['', Validators.required],
        nameBilling: ['', Validators.required],
        siretPartner: ['', Validators.required],
        numberAddressBilling: ['', Validators.required],
        typeAddressBilling: ['', Validators.required],
        nameAddressBilling: ['', Validators.required],
        complementAddressBilling: ['', Validators.required],
        zipAddressBilling: ['', Validators.required],
        cityAddressBilling: ['', Validators.required],
        datePartner: ''
      }
    );
  }

  onSubmitFormPartner(): void {
    const formValue = this.partnerForm.value;
    const newPartner = new Partner(
      formValue['idPartener'],
      formValue['namePartner'],
      formValue['numberAddressPartner'],
      formValue['typeAddressPartner'],
      formValue['nameAddressPartner'],
      formValue['complementAddressPartner'],
      formValue['zipAddressPartner'],
      formValue['cityAddressPartner'],
      formValue['phonePartner'],
      formValue['statusPartner'],
      formValue['mailPartner'],
      formValue['nameBilling'],
      formValue['siretPartner'],
      formValue['numberAddressPartner'],
      formValue['typeAddressBilling'],
      formValue['nameAddressBillling'],
      formValue['complementAddressBilling'],
      formValue['zipAddressBilling'],
      formValue['cityAddressBilling']
    );
    this.partnerService.addPartner(newPartner);
    this.router.navigate(['/partner']);
    this.rebuildFormPartner();
  }


  rebuildFormPartner(): void {
    this.partnerForm.reset(
      {
        idPartner: '',
        namePartner: '',
        numberAddressPartner: '',
        typeAddressPartner: '',
        nameAddressPartner: '',
        complementAddressPartner: '',
        zipAddressPartner: '',
        cityAddressPartner: '',
        phonePartner: '',
        statusPartner: '',
        mailPartner: '',
        nameBilling: '',
        siretPartner: '',
        numberAddressBilling: '',
        typeAddressBilling: '',
        nameAddressBillling: '',
        complementAddressBilling: '',
        zipAddressBilling: '',
        cityAddressBilling: ''
      }
    );
  }
}

