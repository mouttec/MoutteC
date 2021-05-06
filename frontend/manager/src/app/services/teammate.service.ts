import { Subject } from 'rxjs';
import { Teammate } from '../models/teammates.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeammateService {

  teammateSubject = new Subject<Teammate[]>();
  private teammates: Teammate[] = [
    {
      action: 'editTeammate',
      firstNameTeammate: 'angie',
      lastNameTeammate: 'test',
      usernameTeammate: 'test2',
      mailTeammate: 'tot@to.com',
      phoneTeammate: '0000000000',
      password: 'test',
      statusTeammate: 'Activer',
      jobTeammate: 'Manager',
      locationAgency: 'Marseille',
      superAdmin: true
    }
  ];

  constructor() { }

  emitTeammateSubject(): void {
    console.log('emit', this.teammates);
    this.teammateSubject.next(this.teammates);
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
    this.teammates[index].action = 'editTeamate';
    this.teammates[index].statusTeammate = 'Activer';
    this.emitTeammateSubject();
  }

  switchNoTeammate(index: number): void {
    this.teammates[index].action = 'editTeamate';
    this.teammates[index].statusTeammate = 'Désactiver';
    this.emitTeammateSubject();
  }

}
