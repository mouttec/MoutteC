import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.css']
})
export class ContractViewComponent implements OnInit, OnDestroy {

  contracts: any[];
  contractSubscription: Subscription;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contractSubscription = this.contractService.contractSubject.subscribe(
      (contracts: any[]) => {
        this.contracts = contracts;
      }
    );
    this.contractService.emitContractSubject();
  }

  ngOnDestroy(): void {
    this.contractSubscription.unsubscribe();
  }

}
