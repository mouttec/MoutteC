import { Partner } from './../models/partners.models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  partnerSubject = new Subject<Partner[]>();
  PHP_API_SERVER = "http://localhost:8888/MoutteC/backend/api/partner";
  private partners: Partner[];

  constructor(private httpClient: HttpClient) { }

  emitPartnerSubject() {
    this.partnerSubject.next(this.partners);
  }

  readListPartner(): Observable<Partner[]>{
    this.httpClient.get<Partner[]>(`${this.PHP_API_SERVER}/readListPartner.php`).subscribe(
      (reponse) => {
        this.partners = reponse;
        this.emitPartnerSubject();
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
    return this.httpClient.get<Partner[]>(`${this.PHP_API_SERVER}/readListPatner.php`);
  }

  addPartner(partner: Partner): void {
    this.httpClient.post(`${this.PHP_API_SERVER}/createManager.php`, partner).subscribe(
      () => {
        this.partners.push(partner);
        console.log('enregistrement 1');
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
  }

  deletePartnerById(idPartner: number) {
    return this.httpClient.delete<Partner>(`${this.PHP_API_SERVER}/deletePartner.php/?idPartner=${idPartner}`);
  }

  getPartnerById(idPartner: any): Observable<any> {
    return this.httpClient.get(`${this.PHP_API_SERVER}/readSinglePartner.php/?idPartner=${idPartner}`);
  }

  updatePartner(partner: Partner) {
    this.httpClient.put(`${this.PHP_API_SERVER}/updatePartner.php`, partner).subscribe(
      () => {
        console.log('enregistrement ok');
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
  }

  switchPartnerActivate(index: number): void {
    this.partners[index].statusPartner = 'Partenaire';
    this.updatePartner(this.partners[index]);
  }

  switchNoPartner(index: number): void {
    this.partners[index].statusPartner = 'Non partenaire';
    this.updatePartner(this.partners[index]);
  }
}
