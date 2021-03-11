import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Manager } from './../models/manager.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private managers!: Manager [];
  managerSubject = new Subject<Manager[]>();

  constructor() {
  }

  emitManagerSubject(){
    this.managerSubject.next(this.managers.slice());
  }

  addManager(manager: Manager){
    this.managers.push(manager);
    this.emitManagerSubject();
  }

  getManagerById(idManager: number) {
    const manager = this.managers.find(
      (managerObject) => {
        return managerObject.idManager === idManager;
      }
    );
    return manager;
  }

  switchManagerActivate(index: number): void {
    this.managers[index].statusManager = 'Activer';
    this.emitManagerSubject();
  }

  switchNoManager(index: number): void {
    this.managers[index].statusManager = 'Désactiver';
    this.emitManagerSubject();
  }
}
