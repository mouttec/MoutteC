import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Partner } from '../models/partners.model';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  partnerSubject = new Subject<any[]>();

  private partners: Partner[] = [
    {
      usernamePartner: 'user',
      password: 'mdp',
      namePartner: 'Midas la valentine',
      addressPartner: '12',
      phonePartner: '0123456789',
      mailPartner: 'test@test.com',
      statusPartner: 'Non partenaire',
      typePartner: 'Garage',
      nameBilling: 'billing',
      siretPartner: 'siret',
      addressBilling: '12',
      idPartner: 1
    }
  ];

  constructor() { }

  emitPartnerSubject(): Partner[] {
    this.partnerSubject.next(this.partners.slice());
    return this.partners;
  }

  addPartner(partner: Partner): void {
    this.partners.push(partner);
    this.emitPartnerSubject();
  }

  getPartnerById(idPartner: number): any {
    const partner = this.partners.find(
      (partnerObject) => {
        return partnerObject.idPartner === idPartner;
      }
    );
    return partner;
  }

  switchPartnerActivate(index: number): void {
    this.partners[index].statusPartner = 'Partenaire';
    this.emitPartnerSubject();
  }

  switchNoPartner(index: number): void {
    this.partners[index].statusPartner = 'Non partenaire';
    this.emitPartnerSubject();
  }
}
