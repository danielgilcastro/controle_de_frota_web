import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(login: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, { login, password });
  }

  logout() {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

}
