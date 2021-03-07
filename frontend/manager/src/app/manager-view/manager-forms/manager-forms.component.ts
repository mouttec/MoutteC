import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Manager } from './../../models/managers.models';
import { ManagerService } from './../../services/manager.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-forms',
  templateUrl: './manager-forms.component.html',
  styleUrls: ['./manager-forms.component.css']
})
export class ManagerFormsComponent implements OnInit {

  managerForm: FormGroup;
  managers: Manager[];
  managerSusbcripiton: Subscription;

  constructor(private managerService: ManagerService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.managerSusbcripiton = this.managerService.managerSubject.subscribe(
      (managers: Manager[]) => {
        this.managers = managers;
      }
    );
    this.managerService.readListManager();
    this.initFormManager();
  }

  initFormManager(): void {
    this.managerForm = this.formBuilder.group(
      {
        idManager: '',
        firstNameManager: ['', Validators.required],
        lastNameManager: ['', Validators.required],
        usernameManager: ['', Validators.required],
        mailManager: ['', Validators.required],
        phoneManager: ['', Validators.required],
        passwordManager: ['', Validators.required],
        statusManager: ['', Validators.required],
        dateManager: ''
      }
    );
  }

  onSubmitFormManager(): void {
    const formValue = this.managerForm.value;
    const newManager = new Manager(
      formValue['idManager'],
      formValue['firstNameManager'],
      formValue['lastNameManager'],
      formValue['usernameManager'],
      formValue['mailManager'],
      formValue['phoneManager'],
      formValue['passwordManager'],
      formValue['statusManager'],
      formValue['dateManager']
    );
    this.managerService.addManager(newManager);
    this.router.navigate(['/manager']);
    this.rebuildFormManager();
  }


  rebuildFormManager(): void {
    this.managerForm.reset(
      {
        idManager: '',
        firstNameManager: '',
        lastNameManager: '',
        usernameManager: '',
        mailManager: '',
        phoneManager: '',
        passwordManager: '',
        statusManager: '',
        dateManager: ''
      }
    );
  }
}
