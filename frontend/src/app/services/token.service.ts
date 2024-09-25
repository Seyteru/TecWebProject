import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKey = 'authToken';
  private userKey = 'authUser';

  signOut(){
    localStorage.removeItem(this.tokenKey);
  }

  saveToken(token: string){
    localStorage.removeItem(this.tokenKey);
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null{
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): any{
    const user = localStorage.getItem(this.userKey);
    if(user){
      return JSON.parse(user);
    } else{
      return {};
    }
  }

}
