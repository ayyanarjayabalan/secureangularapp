import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private isLogged = false;
  private loggedUserRole = 'basic'
  private token = '';

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  getLoginData(): Observable<any> {
    return this.http.get('./assets/user.json');
  }

  isAuthenticated(): boolean {
    return this.isLogged;
  }

  getUserRole(): string {
    return this.loggedUserRole;
  }

  login(role: string) {
    if (role) {
      this.loggedUserRole = role;
    } else {
      this.loggedUserRole = 'basic'
    }

    this.getLoginData().subscribe((data) => {
      console.log(data);
      this.token = data.token;
      this.isLogged = true;
    });
  }

  logout() {
    this.isLogged = false;
  }
}
