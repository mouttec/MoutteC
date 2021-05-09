import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src//app/services/customer.service';

@Component({
  selector: 'app-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.css']
})
export class SingleCustomerComponent implements OnInit {

  currentCustomer = null;
  firstNameCustomer: string;
  lastNameCustomer: string;
  dateOfBirthdayCustomer: string;
  phoneCustomer: string;
  mailCustomer: string;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomer(this.route.snapshot.paramMap.get('idCustomer'));
  }

  getCustomer(idCustomer): void {
    this.customerService.getCustomerById(idCustomer).subscribe(
      customer => {
        this.currentCustomer = customer;
        this.firstNameCustomer = this.currentCustomer.firstNameCustomer;
        this.lastNameCustomer = this.currentCustomer.lastNameCustomer;
        this.dateOfBirthdayCustomer = this.currentCustomer.dateOfBirthdayCustomer;
        this.phoneCustomer = this.currentCustomer.phoneCustomer;
        this.mailCustomer = this.currentCustomer.mailCustomer;
      },
      error => {
        console.log('erreur de lecture seule' + error);
      }
    );
  }
}
