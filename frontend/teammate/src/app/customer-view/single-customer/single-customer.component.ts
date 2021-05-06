import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.css']
})
export class SingleCustomerComponent implements OnInit {

  firstNameCustomer: string;
  lastNameCustomer: string;
  dateOfBirthdayCustomer: string;
  phoneCustomer: string;
  mailCustomer: string;
  dateCustomer: string;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idCustomer = this.route.snapshot.params['idCustomer'];
    this.firstNameCustomer = this.customerService.getCustomerById(+idCustomer).firstNameCustomer;
    this.lastNameCustomer = this.customerService.getCustomerById(+idCustomer).lastNameCustomer;
    this.dateOfBirthdayCustomer = this.customerService.getCustomerById(+idCustomer).dateOfBirthdayCustomer;
    this.phoneCustomer = this.customerService.getCustomerById(+idCustomer).phoneCustomer;
    this.mailCustomer = this.customerService.getCustomerById(+idCustomer).mailCustomer;
    this.dateCustomer = this.customerService.getCustomerById(+idCustomer).dateCustomer;
  }

}
