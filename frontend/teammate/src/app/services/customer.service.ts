import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from '../models/customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerSubject = new Subject<any[]>();

  private customers: Customer[] = [
    {
      idCustomer: 1,
      firstNameCustomer: 'client1',
      lastNameCustomer: 'Client1',
      dateOfBirthdayCustomer: '12/02/1990',
      phoneCustomer: '0000000000',
      mailCustomer: 'test@test.com'
    }
  ]

  constructor() { }

  emitCustomerSubject(): void {
    this.customerSubject.next(this.customers.slice());
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
    this.emitCustomerSubject();
  }

  getCustomerById(idCustomer: number): any {
    const customer = this.customers.find(
      (customerObject) => {
        return customerObject.idCustomer === idCustomer;
      }
    );
    return customer;
  }
}
