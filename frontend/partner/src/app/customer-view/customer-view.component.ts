import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit, OnDestroy {

  customers: any[];
  customerSubscription: Subscription;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerSubscription = this.customerService.customerSubject.subscribe(
      (customers: any[]) => {
        this.customers = customers;
      }
    );
    this.customerService.emitCustomerSubject();
  }

  ngOnDestroy(): void {
    this.customerSubscription.unsubscribe();
  }
}
