import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contract } from '../models/contracts.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractSubject = new Subject<any[]>();

  private contracts: Contract[] = [
    {
      idContract: 1,
      urlContract: 'aaaa.pdf'
    }
  ];

  constructor() { }

  emitContractSubject(): void {
    this.contractSubject.next(this.contracts.slice());
  }

  addContract(contract: Contract): void {
    this.contracts.push(contract);
    this.emitContractSubject();
  }

  getContractById(idContract: number): any {
    const contract = this.contracts.find(
      (contractObject) => {
        return contractObject.idContract === idContract;
      }
    );
    return contract;
  }
}
