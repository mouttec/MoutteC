import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from '../../models/customers.model';

@Component({
  selector: 'app-customer-forms',
  templateUrl: './customer-forms.component.html',
  styleUrls: ['./customer-forms.component.css']
})
export class CustomerFormsComponent implements OnInit {

  customerForm: FormGroup;
  customers: Customer[];
  customerSubscription: Subscription;

  constructor(private customerService: CustomerService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customerSubscription = this.customerService.customerSubject.subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
      }
    );
    this.customerService.emitCustomerSubject();
    this.initFormCustomer();
  }

  initFormCustomer(): void {
    this.customerForm = this.formBuilder.group(
      {
        idCustomer: '',
        firstNameCustomer: ['', Validators.required],
        lastNameCustomer: ['', Validators.required],
        dateOfBirthdayCustomer: ['', Validators.required],
        phoneCustomer: ['', Validators.required],
        mailCustomer:['', Validators.required]
      }
    );
  }

  onSubmitFormCustomer(): void {
    const formValue = this.customerForm.value;
    const newCustomer = new Customer(
      formValue['firstNameCustomer'],
      formValue['lastNameCustomer'],
      formValue['dateOfBirthdayCustomer'],
      formValue['phoneCustomer'],
      formValue['mailCustomer']
    );
    newCustomer.idCustomer = this.customers[(this.customers.length - 1)].idCustomer + 1;
    this.customerService.addCustomer(newCustomer);
    this.router.navigate(['/customer']);
    this.rebuildFormCustomer();
  }

  rebuildFormCustomer(): void {
    this.customerForm.reset(
      {
        idCustomer: '',
        firstNameCustomer: '',
        lastNameCustomer: '',
        dateOfBirthdayCustomer: '',
        phoneCustomer: '',
        mailCustomer: ''
      }
    );
  }
}
