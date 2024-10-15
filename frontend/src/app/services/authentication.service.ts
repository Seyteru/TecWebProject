import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = 'http://localhost:3000/api/auth';

  private http = inject(HttpClient);
  private tokenService = inject(TokenService);
  private userService = inject(UserService);
  private router = inject(Router)

  login(credentials: { username: string, password: string }): Observable<any>{
    return this.http.post(`${this.url}/login`, credentials).pipe(
      tap( res => {
        this.tokenService.saveToken(res.toString());
      })
    );
  }

  register(credentials: { username: string, password: string, role: string }): Observable<any>{
    return this.http.post(`${this.url}/register`, credentials);
  }

  logout(){
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean{
    const token = this.tokenService.getToken();
    return token != null;
  }
}
