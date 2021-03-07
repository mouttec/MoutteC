import { Manager } from './../models/managers.models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  managerSubject = new Subject<Manager[]>();
  PHP_API_SERVER = "http://localhost:8888/MoutteC/backend/api/manager";
  private managers: Manager[]

  constructor(private httpClient: HttpClient) { }

  emitManagerSubject() {
    this.managerSubject.next(this.managers);
  }

  readListManager(): Observable<Manager[]>{
    this.httpClient.get<Manager[]>(`${this.PHP_API_SERVER}/readListManager.php`).subscribe(
      (reponse) => {
        this.managers = reponse;
        this.emitManagerSubject();
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
    return this.httpClient.get<Manager[]>(`${this.PHP_API_SERVER}/readListManager.php`);
  }

  addManager(manager: Manager): void {
    this.httpClient.post(`${this.PHP_API_SERVER}/createManager.php`, manager).subscribe(
      () => {
        this.managers.push(manager);
        console.log('enregistrement 1');
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
  }

  deleteManagerById(idManager: number) {
    return this.httpClient.delete<Manager>(`${this.PHP_API_SERVER}/deleteManager.php/?idManager=${idManager}`);
  }

  getManagerById(idManager): Observable<any> {
    return this.httpClient.get(`${this.PHP_API_SERVER}/readSingleManager.php/?idManager=${idManager}`);
  }

  updateManager(manager: Manager) {
    this.httpClient.put(`${this.PHP_API_SERVER}/updateManager.php`, manager).subscribe(
      () => {
        console.log('enregistrement ok');
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
  }

  switchManagerActivate(index: number): void {
    this.managers[index].statusManager = 'Activer';
    this.updateManager(this.managers[index]);
  }

  switchNoManager(index: number): void {
    this.managers[index].statusManager = 'Désactiver';
    this.updateManager(this.managers[index]);
  }
}
