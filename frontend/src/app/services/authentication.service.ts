import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = 'http://localhost:3000/api/auth';

  private http = inject(HttpClient);
  private tokenService = inject(TokenService);

  login(credentials: { username: string, password: string }): Observable<any>{
    return this.http.post(`${this.url}/login`, credentials);
  }

  logout(){
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  }
}
