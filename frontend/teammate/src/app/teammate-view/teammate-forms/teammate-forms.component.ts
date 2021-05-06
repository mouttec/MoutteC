import { Component, OnInit } from '@angular/core';
import { TeammateService } from 'src/app/services/teammate.service';
import { Teammate } from '../../models/teammates.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-teammate-forms',
  templateUrl: './teammate-forms.component.html',
  styleUrls: ['./teammate-forms.component.css']
})
export class TeammateFormsComponent implements OnInit {

  teammateForm: FormGroup;
  teammates: Teammate[];
  teammateSubscription: Subscription;

  constructor(private teammateService: TeammateService, private router: Router, private formBuilder: FormBuilder, private agencyService: AgencyService) { }

  agencies = this.agencyService.emitAgencySubject();

  ngOnInit(): void {
    this.teammateSubscription = this.teammateService.teammateSubject.subscribe(
      (teammates: Teammate[]) => {
        this.teammates = teammates;
      }
    );
    this.teammateService.emitTeammateSubject();
    this.initFormTeammate();
  }

  initFormTeammate(): void {
    this.teammateForm = this.formBuilder.group(
      {
        firstNameTeammate: ['', Validators.required],
        lastNameTeammate: ['', Validators.required],
        usernameTeammate: ['', Validators.required],
        mailTeammate: ['', Validators.required],
        phoneTeammate: ['', Validators.required],
        password: ['', Validators.required],
        statusTeammate: ['', Validators.required],
        jobTeammate: ['', Validators.required],
        nameAgency: ['', Validators.required],
        superAdmin: ['', Validators.required],
        idTeammate: ''
      }
    );
  }

  onSubmitFormTeammate(): void {
    const formValue = this.teammateForm.value;
    const newTeammate = new Teammate(
      formValue['firstNameTeammate'],
      formValue['lastNameTeammate'],
      formValue['usernameTeammate'],
      formValue['mailTeammate'],
      formValue['phoneTeammate'],
      formValue['password'],
      formValue['statusTeammate'],
      formValue['jobTeammate'],
      formValue['nameAgency'],
      formValue['superAdmin']
    );
    newTeammate.idTeammate = this.teammates[(this.teammates.length - 1)].idTeammate + 1;
    this.teammateService.addTeammate(newTeammate);
    this.router.navigate(['/teammate']);
    this.rebuildFormTeammate();
  }

  rebuildFormTeammate(): void {
    this.teammateForm.reset(
      {
        firstNameTeammate: '',
        lastNameTeammate: '',
        usernameTeammate: '',
        mailTeammate: '',
        phoneTeammate: '',
        password: '',
        statusTeammate: '',
        jobTeammate: '',
        nameAgency: '',
        superAdmin: ''
      }
    );
  }
}
