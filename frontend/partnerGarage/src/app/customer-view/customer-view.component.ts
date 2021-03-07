import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from './../services/customer.service';
import { Customer } from '../models/customers.models';


@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit, OnDestroy {

  customers: Customer[];
  customerSubscription: Subscription;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {}
  //   this.customerSubscription = this.customerService.customerSubject.subscribe(
  //     (customers: Customer[]) => {
  //       this.customers = customers;
  //     }
  //   );
  //   this.customerService.readListCustomer();
  // }

  ngOnDestroy(): void {}
  //   this.customerSubscription.unsubscribe();
  // }

}
