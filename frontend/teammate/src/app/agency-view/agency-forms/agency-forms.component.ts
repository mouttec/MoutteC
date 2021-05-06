import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgencyService } from 'src/app/services/agency.service';
import { Agency } from '../../models/agencies.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-agency-forms',
  templateUrl: './agency-forms.component.html',
  styleUrls: ['./agency-forms.component.css']
})
export class AgencyFormsComponent implements OnInit {

  agencyForm: FormGroup;
  agencies: Agency[];
  agencySubscription: Subscription;

  constructor(private agencyService: AgencyService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.agencySubscription = this.agencyService.agencySubject.subscribe(
      (agencies: Agency[]) => {
        this.agencies = agencies;
      }
    );
    this.agencyService.emitAgencySubject();
    this.initFormAgency();
  }

  initFormAgency(): void {
    this.agencyForm = this.formBuilder.group(
      {
        nameAgency: ['', Validators.required],
        addressAgency: ['', Validators.required],
        phoneAgency: ['', Validators.required],
        mailAgency: ['', Validators.required],
        statusAgency: ['', Validators.required],
        idAgency: ''
      }
    );
  }

  onSubmitFormAgency(): void {
    const formValue = this.agencyForm.value;
    const newAgency = new Agency(
      formValue['nameAgency'],
      formValue['addressAgency'],
      formValue['phoneAgency'],
      formValue['mailAgency'],
      formValue['statusAgency']
    );
    newAgency.idAgency = this.agencies[(this.agencies.length - 1)].idAgency + 1;
    this.agencyService.addAgency(newAgency);
    this.router.navigate(['/agency']);
    this.rebuildFormAgency();
  }

  rebuildFormAgency(): void {
    this.agencyForm.reset(
      {
        nameAgency: '',
        addressAgency: '',
        phoneAgency: '',
        mailAgency: '',
        statusAgency: '',
        idAgency: '',
      }
    );
  }
}
