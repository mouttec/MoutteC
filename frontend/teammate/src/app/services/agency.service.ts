import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Agency } from '../models/agencies.model';


@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  agencySubject = new Subject<any[]>();

  private agencies: Agency[] = [
    {
      idAgency: 1,
      nameAgency: 'Marseille',
      addressAgency: '23 alle marius 121347',
      phoneAgency: '00000000',
      mailAgency: 'etst@eststs.com',
      statusAgency: 'Ouvert'
    }
  ];

  constructor() { }

  emitAgencySubject(): Agency[] {
    this.agencySubject.next(this.agencies.slice());
    return this.agencies;
  }

  addAgency(agency: Agency): void {
    this.agencies.push(agency);
    this.emitAgencySubject();
  }


  getAgencyById(idAgency: number): any {
    const agency = this.agencies.find(
      (agencyObject) => {
        return agencyObject.idAgency === idAgency;
      }
    );
    return agency;
  }

  switchAgencyOpen(index: number): void {
    this.agencies[index].statusAgency = 'Ouvert';
    this.emitAgencySubject();
  }

  switchAgencyClose(index: number): void {
    this.agencies[index].statusAgency = 'Fermer';
    this.emitAgencySubject();
  }
}
