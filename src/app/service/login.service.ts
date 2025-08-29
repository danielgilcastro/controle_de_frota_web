import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoginService {
private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(login: string, password: string) {
   if(login === 'admin' && password === '123456'){
    return of({ token: 'fake-jwt-token', user: { login: 'admin', role: 'admin' } });
  }
  return throwError(() => new Error('Credenciais inválidas'));
  }

  logout() {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  getUser() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

}
