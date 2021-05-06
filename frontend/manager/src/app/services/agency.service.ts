import { Injectable } from '@angular/core';
import { Agency } from '../models/agencies.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  agencySubject = new Subject<Agency[]>();
  private agencies: Agency[] = [
    {
      action: 'edit',
      nameAgency: 'Marseille',
      numberAddressAgency: '3',
      typeAddressAgency: 'Avenue',
      nameAddressAgency: 'Sainte Euphémie',
      zipAddressAgency: 13380,
      cityAddressAgency: 'Plan de Cuques',
      phoneAgency: '0000000000',
      mailAgency: 'to@to.com',
      statusAgency: 'Ouverte'
    }
  ];

  constructor() { }

  emitAgencySubejct(): void {
    this.agencySubject.next(this.agencies.slice());
  }

  addAgency(agency: Agency): void{
    this.agencies.push(agency);
    this.emitAgencySubejct();
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
    this.agencies[index].action = 'editAgency';
    this.agencies[index].statusAgency = 'Ouvert';
    this.emitAgencySubejct();
  }

  switchAgencyClose(index: number): void {
    this.agencies[index].action = 'editAgency';
    this.agencies[index].statusAgency = 'Fermer';
    this.emitAgencySubejct();
  }
}
