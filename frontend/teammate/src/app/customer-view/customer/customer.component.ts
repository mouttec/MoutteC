import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() indexOfCustomer: number;
  @Input() action: string;
  @Input() idCustomer: number;
  @Input() firstNameCustomer: string;
  @Input() lastNameCustomer: string;
  @Input() dateOfBirthdayCustomer: string;
  @Input() phoneCustomer: string;
  @Input() mailCustomer: string;
  @Input() password: string;
  @Input() idPartner: number;
  @Input() dateCustomer: string;


  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }



}
