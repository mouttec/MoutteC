import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerSubject = new Subject<Customer[]>();
  api = 'http://localhost:8888/MoutteCAPI/backend/api/customers/listCustomers.php'
  private customers: Customer[];

  constructor(private httpClient: HttpClient) { }

  emitCustomerSubject() {
    this.customerSubject.next(this.customers.slice());
  }

  readListCustomer() {
    this.httpClient.get<Customer[]>(`${this.api}`).subscribe(
      (reponse) => {
        this.customers = reponse;
        this.emitCustomerSubject();
        console.log(reponse);
      },
      (error) => {
        console.log('erreur de lecture' + error);
      }
    );
    return this.httpClient.get<Customer[]>(`${this.api}`);
  }

  searchCustomerByFirstName(firstNameCustomer): Observable<any> {
    return this.httpClient.get(`${this.api}?firstNameCustomer=${firstNameCustomer}`);
  }

  getCustomerById(idCustomer: number): Observable<any>{
    console.log(idCustomer);
    return this.httpClient.get(`${this.api}?idCustomer=${idCustomer}`);
  }
}
