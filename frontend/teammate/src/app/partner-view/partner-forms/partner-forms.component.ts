import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';
import { Partner } from 'src/app/models/partners.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-forms',
  templateUrl: './partner-forms.component.html',
  styleUrls: ['./partner-forms.component.css']
})
export class PartnerFormsComponent implements OnInit {

  partnerForm: FormGroup;
  partners: Partner[];
  partnerSubscription: Subscription;

  constructor(private partnerService: PartnerService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.partnerSubscription = this.partnerService.partnerSubject.subscribe(
      (partners: Partner[]) => {
        this.partners = partners;
      }
    );
    this.partnerService.emitPartnerSubject();
    this.initFormPartner();
  }

  initFormPartner(): void {
    this.partnerForm = this.formBuilder.group(
      {
        usernamePartner: ['', Validators.required],
        password: ['', Validators.required],
        namePartner: ['', Validators.required],
        addressPartner: ['', Validators.required],
        phonePartner: ['', Validators.required],
        mailPartner: ['', Validators.required],
        statusPartner: ['', Validators.required],
        typePartner: ['', Validators.required],
        nameBilling: ['', Validators.required],
        siretPartner: ['', Validators.required],
        addressBilling: ['', Validators.required],
        idPartner: ''
      }
    );
  }

  onSubmitFormPartner(): void {
    const formValue = this.partnerForm.value;
    const newPartner = new Partner(
      formValue['usernamePartner'],
      formValue['password'],
      formValue['namePartner'],
      formValue['addressPartner'],
      formValue['phonePartner'],
      formValue['mailPartner'],
      formValue['statusPartner'],
      formValue['typePartner'],
      formValue['nameBilling'],
      formValue['siretPartner'],
      formValue['addressBilling']
    );
    newPartner.idPartner = this.partners[(this.partners.length - 1)].idPartner + 1;
    this.partnerService.addPartner(newPartner);
    this.router.navigate(['/partner']);
    this.rebuildFormPartner();
  }

  rebuildFormPartner(): void {
    this.partnerForm.reset(
      {
        usernamePartner: '',
        password: '',
        namePartner: '',
        addressPartner: '',
        phonePartner: '',
        mailPartner: '',
        statusPartner: '',
        typePartner: '',
        nameBilling: '',
        siretPartner: '',
        addressBilling: '',
        idPartner: ''
      }
    );
  }
}
