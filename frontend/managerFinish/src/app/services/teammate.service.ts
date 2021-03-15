import { Injectable } from '@angular/core';
import { Teammate } from './../models/teammate.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class TeammateService {

  teammateSubject = new Subject<Teammate[]>();
  private teammates!: Teammate[];

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
}
