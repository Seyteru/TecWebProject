import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKey = 'authToken';
  private userKey = 'authUser';

  signOut(){
    window.sessionStorage.clear();
  }

  saveToken(token: string){
    window.sessionStorage.removeItem(this.tokenKey);
    window.sessionStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null{
    return window.sessionStorage.getItem(this.tokenKey);
  }

  saveUser(user: any){
    window.sessionStorage.removeItem(this.userKey);
    window.sessionStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): any{
    const user = window.sessionStorage.getItem(this.userKey);
    if(user){
      return JSON.parse(user);
    } else{
      return {};
    }
  }

}
