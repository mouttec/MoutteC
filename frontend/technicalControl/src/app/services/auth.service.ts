import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  baseUrl = 'http://localhost:8888/MoutteCAPI/backend/api/partner/listPartner.php';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  public userlogin(usernamePartner: any, password: any): any {
    return this.httpClient.post<any>(this.baseUrl, { usernamePartner, password})
    .pipe(map(Partner => {
      this.setToken(Partner[0].usernamePartner);
      this.getLoggedInName.emit(true);
      return Partner;
    }));
  }
    // token
    setToken(token: string): void {
      localStorage.setItem('token', token);
    }
}
