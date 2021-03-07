import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contract } from './../models/contracts.models';
import { ContractService } from './../services/contract.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.css']
})
export class ContractViewComponent implements OnInit, OnDestroy {

  contracts: Contract[];
  contractSubscription: Subscription;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contractSubscription = this.contractService.contractSubject.subscribe(
      (contracts: Contract[]) => {
        this.contracts = contracts;
      }
    );
    this.contractService.readListContract();
  }

  ngOnDestroy(): void {
    this.contractSubscription.unsubscribe();
  }

}
