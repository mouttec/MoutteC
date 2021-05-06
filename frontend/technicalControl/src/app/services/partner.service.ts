import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Partner } from 'src/app/models/partners.model';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  partnerSubject = new Subject<any[]>();

  private partners: Partner[] = [
    {
      usernamePartner: 'login',
      password: 'mdp',
      namePartner: 'Test contrôle technique',
      addressPartner: '3 Avenue sainte Euphémie 13380 Plan de cuques',
      phonePartner: '0123456789',
      mailPartner: 'test@controletechnique.com',
      statusPartner: 'Partenaire',
      typePartner: 'Contrôle technique',
      nameBilling: 'Technical Control',
      siretPartner: '01234567890123',
      addressBilling: '3 Avenue sainte Euphémie 13380 Plan de cuques',
      idPartner: 1
    }
  ];

  constructor() { }

  emitPartnerSubject(): Partner[] {
    this.partnerSubject.next(this.partners.slice());
    return this.partners;
  }

  getPartnerById(idPartner: number): any {
    const partner = this.partners.find(
      (partnerObject) => {
        return partnerObject.idPartner === idPartner;
      }
    );
    return partner;
  }
}
