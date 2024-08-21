import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = 'http://localhost:3000/auth';

  private http = inject(HttpClient)
  tokenKey: string = '';

  login(username: string | null | undefined, password: string | null | undefined): Observable<boolean>{
    const restUrl = `${this.url}/login`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = { username, password };

    return this.http.post<{ token: string }>(restUrl, body, { headers }).pipe(
      map( res => {
        if (res && res.token) {
          localStorage.setItem(this.tokenKey, res.token);
          return true;
        } else{
          return false;
        }
      }),
      catchError(this.handleError<boolean>('login', false))
    );
  }
  
  logout(){
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null{
    return localStorage.getItem(this.tokenKey);
  }

  private handleError<T>(operation = 'operation', result: T){
    return(error: any): Observable<T> => {
      console.error(`${operation} failure: ${error.message}`);
      return of(result as T);
    };
  }
  
}
