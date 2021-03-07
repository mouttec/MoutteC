import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../models/customers.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() IndexOfCustomer: number;
  @Input() idCustomer: number;
  @Input() firstNameCustomer: string;
  @Input() lastNameCustomer: string;
  @Input() addressTakingCareCustomer: string;
  @Input() zipTakingCareCustomer: number;
  @Input() cityTakingCareCustomer: string;
  @Input() phoneCustomer: string;
  @Input() mailCustomer: string;
  @Input() passwordCustomer: string;
  @Input() addressReturnCustomer: string;
  @Input() zipReturnCustomer: string;
  @Input() cityReturnCustomer: string;
  @Input() partnerFavoriteCustomer: string;
  @Input() dateCustomer: string;

  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  OnDeleteCustomer(idCustomer) {
    this.customerService.deleteCustomerById(idCustomer)
    .subscribe(
      (customer: Customer) => {
        console.log("Customer delected", customer);
        this.customerService.readListCustomer().subscribe((customers: Customer[]) => {
          this.customers = customers
        })
      }
    )
  }

}
