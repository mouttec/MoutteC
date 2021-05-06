import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  baseUrl = 'http://localhost:8888/CAM/backend/api';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor( private httpClient: HttpClient) { }
  public userlogin(usernameTeammate: any, password: any): any {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { usernameTeammate, password})
    .pipe(map(Teammate  => {
      this.setToken(Teammate[0].usernameTeammate);
      this.getLoggedInName.emit(true);
      return Teammate;
    }));
  }

  // token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
