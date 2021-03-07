import { Component, OnInit, Input } from '@angular/core';
import { Contract } from './../../models/contracts.models';
import { ContractService } from './../../services/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  @Input() IndexOfContract: number;
  @Input() idContract: number;
  @Input() firstNameContract: string;
  @Input() lastNameContract: string;
  @Input() urlContract: string;
  @Input() dateContract: string;

  contracts: Contract[];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
  }

  onDeleteContract(idContract) {
    this.contractService.deleteContractById(idContract).subscribe(
      (contract: Contract) => {
        console.log("Contract deleted", contract);
        this.contractService.readListContract().subscribe((contracts: Contract[]) => {
          this.contracts = contracts
        })
      }
    )
  }

}
