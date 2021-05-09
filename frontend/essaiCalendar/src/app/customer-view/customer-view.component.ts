import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit, OnDestroy {

  customers: any[];
  customerSubscription: Subscription;
  firstNameCustomer: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerSubscription = this.customerService.customerSubject.subscribe(
      (customers: any []) => {
        this.customers = customers;
      }
    );
    this.customerService.readListCustomer();
  }

  searchByFirstName(): void {
    this.customerService.searchCustomerByFirstName(this.firstNameCustomer)
      .subscribe(
        customers => {
          this.customers = customers;
          console.log(customers);
        },
        error => {
          console.log(error);
        });
  }

  ngOnDestroy(): void {
    this.customerSubscription.unsubscribe();
  }

}
