import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contract } from './../models/contracts.models';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractSubject = new Subject<Contract[]>();
  PHP_API_SERVER = "http://localhost:8888/MoutteC/backend/api/manager";
  private contracts: Contract [];

  constructor(private httpClient: HttpClient) { }

  emitContractSubject() {
    this.contractSubject.next(this.contracts);
  }

  readListContract(): Observable<Contract[]>{
    this.httpClient.get<Contract[]>(`${this.PHP_API_SERVER}/readListContract.php`).subscribe(
      (reponse) => {
        this.contracts = reponse;
        this.emitContractSubject();
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
    return this.httpClient.get<Contract[]>(`${this.PHP_API_SERVER}/readListContract.php`);
  }

  deleteContractById(idContract: number) {
    return this.httpClient.delete<Contract>(`${this.PHP_API_SERVER}/readSingleContract.php/?idContract=${idContract}`);
  }

}
