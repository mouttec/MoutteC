import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './../models/customers.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerSubject = new Subject<Customer[]>();
  PHP_API_SERVER = "http://localhost:8888/MoutteC/backend/api/partnerGarage";
  private customers: Customer[];

  constructor(private httpClient: HttpClient) { }

  emitCustomerSubject() {
    this.customerSubject.next(this.customers);
  }

  readListCustomer(): Observable<Customer[]> {
    this.httpClient.get<Customer[]>(`${this.PHP_API_SERVER}/readListCustomer.php`).subscribe(
      (reponse) => {
        this.customers = reponse;
        this.emitCustomerSubject();
      },
      (error) => {
        console.log('erreur de sauvagarde' + error);
      }
    );
    return this.httpClient.get<Customer[]>(`${this.PHP_API_SERVER}/readListCustomer.php`);
  }

  addCustomer(customer: Customer): void {
    this.httpClient.post(`${this.PHP_API_SERVER}/createCustomer.php`,customer).subscribe(
      () => {
        this.customers.push(customer);
        console.log('enregistrement 1');
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
  }

  deleteCustomerById(idCustomer: number) {
    return this.httpClient.delete<Customer>(`${this.PHP_API_SERVER}/deleteCustomer.php/?idCustomer=${idCustomer}`);
  }

  getCustomerById(idCustomer: any): Observable<any> {
    return this.httpClient.get(`${this.PHP_API_SERVER}/readSingleCustomer.php/?idCustomer=${idCustomer}`);
  }

  updateCustomer(customer: Customer) {
    this.httpClient.put(`${this.PHP_API_SERVER}/updateCustomer.php`, customer).subscribe(
      () => {
        console.log("enregistrement ok");
      },
      (error) => {
        console.log('errreur de sauvegarde' + error);
      }
    );
  }
}


