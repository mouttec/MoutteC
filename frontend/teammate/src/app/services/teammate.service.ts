import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Teammate } from '../models/teammates.model';

@Injectable({
  providedIn: 'root'
})

export class TeammateService {

  teammateSubject = new Subject<any[]>();

  private teammates: Teammate[] = [
    {
      firstNameTeammate: 'angie',
      lastNameTeammate: 'test',
      usernameTeammate: 'test2',
      mailTeammate: 'tot@to.com',
      phoneTeammate: '0000000000',
      password: 'test',
      statusTeammate: 'Activer',
      jobTeammate: 'Manager',
      nameAgency: 'Marseille',
      superAdmin: 'oui',
      idTeammate: 1,
    }
  ];

  constructor() { }

  emitTeammateSubject(): void {
    this.teammateSubject.next(this.teammates.slice());
  }

  addTeammate(teammate: Teammate): void {
    this.teammates.push(teammate);
    this.emitTeammateSubject();
  }

  getTeammateById(idTeammate: number): any {
    const teammate = this.teammates.find(
      (teammateObject) => {
        return teammateObject.idTeammate === idTeammate;
      }
    );
    return teammate;
  }

  switchTeammateActivate(index: number): void {
    this.teammates[index].statusTeammate = 'Activer';
    this.emitTeammateSubject();
  }

  switchNoTeammate(index: number): void {
    this.teammates[index].statusTeammate = 'Désactiver';
    this.emitTeammateSubject();
  }

}
