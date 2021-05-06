import { TeammateService } from '../../services/teammate.service';
import { Teammate } from '../../models/teammates.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teammate-forms',
  templateUrl: './teammate-forms.component.html',
  styleUrls: ['./teammate-forms.component.css']
})
export class TeammateFormsComponent implements OnInit {

  teammateForm: FormGroup;
  teammates: Teammate[];
  teammateSubscription: Subscription;

  constructor(private teammateService: TeammateService, private router: Router, private formBuilder: FormBuilder) { }

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
        idTeammate: '',
        action: '',
        firstNameTeammate: ['', Validators.required],
        lastNameTeammate: ['', Validators.required],
        usernameTeammate: ['', Validators.required],
        mailTeammate: ['', Validators.required],
        phoneTeammate: ['', Validators.required],
        password: ['', Validators.required],
        statusTeammate: ['', Validators.required],
        jobTeammate: ['', Validators.required],
        locationAgency: ['', Validators.required],
        superAdmin: ['', Validators.required],
        dateTeammate: ''
      }
    );
  }

  onSubmitFormTeammate(): void {
    const formValue = this.teammateForm.value;
    const newTeammate = new Teammate(
      formValue['idTeammate'],
      formValue['firstNameTeammate'],
      formValue['lastNameTeammate'],
      formValue['usernameTeammate'],
      formValue['mailTeammate'],
      formValue['phoneTeammate'],
      formValue['password'],
      formValue['statusTeammate'],
      formValue['jobTeammate'],
      formValue['locationAgency'],
      formValue['superAdmin'],
      formValue['dateTeammate']
    );
    newTeammate.action = 'editTeammate';
    this.teammateService.addTeammate(newTeammate);
    this.router.navigate(['/teammate']);
    this.rebuildFormTeammate();
  }

  rebuildFormTeammate(): void {
    this.teammateForm.reset(
      {
        idTeammate: '',
        action: '',
        firstNameTeammate: '',
        lastNameTeammate: '',
        usernameTeammate: '',
        mailTeammate: '',
        phoneTeammate: '',
        password: '',
        statusTeammate: '',
        jobTeammate: '',
        locationAgency: '',
        superAdmin: '',
        dateTeammate: ''
      }
    );
  }
}
