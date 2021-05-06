import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../models/customers.model';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  firstNameCustomer: string;
  lastNameCustomer: string;
  dateOfBirthdayCustomer: string;
  phoneCustomer: string;
  mailCustomer: string;
  dateCustomer: string;

  customerForm: FormGroup;
  customers: Customer[];
  customerSubscription: Subscription;


  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const idCustomer = this.route.snapshot.params['idCustomer'];
    this.firstNameCustomer = this.customerService.getCustomerById(+idCustomer).firstNameCustomer;
    this.lastNameCustomer = this.customerService.getCustomerById(+idCustomer).lastNameCustomer;
    this.dateOfBirthdayCustomer = this.customerService.getCustomerById(+idCustomer).dateOfBirthdayCustomer;
    this.phoneCustomer = this.customerService.getCustomerById(+idCustomer).phoneCustomer;
    this.mailCustomer = this.customerService.getCustomerById(+idCustomer).mailCustomer;
    this.dateCustomer = this.customerService.getCustomerById(+idCustomer).dateCustomer;

    this.customerSubscription = this.customerService.customerSubject.subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
      }
    );
    this.customerService.emitCustomerSubject();
  }

}
