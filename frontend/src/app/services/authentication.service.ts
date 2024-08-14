import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private restUrl = "http://localhost:5432/auth";
  currentUser: Observable<any> | undefined;
  currentUserSub: BehaviorSubject<any> | undefined;

  constructor(private http: HttpClient) {
    this.currentUserSub = new BehaviorSubject<any>(JSON.parse(localStorage.getItem("currentUser") || "{}"));
     this.currentUser = this.currentUserSub.asObservable();
  }

  login(username: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.restUrl}/login`, {username, password})
      .pipe(map(user => {
        if(user && user.token){
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSub?.next(user);
        }
        return user;
      }));
  }
  
  logout(){
    localStorage.removeItem("currentUser");
    this.currentUserSub?.next(null);
  }

  isUserAuth() : boolean {
    return !this.getCurrentUser() && !this.getCurrentUser();
  }

  getToken(): string{
    const currentUser = this.getCurrentUser()
    return currentUser ? currentUser.token : null;
  }

  getCurrentUser(): any{
    return this.currentUserSub?.value;
  }
  
}
