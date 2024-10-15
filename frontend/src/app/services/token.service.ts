import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKey = 'authToken';

  clearToken(){
    localStorage.removeItem(this.tokenKey);
  }

  saveToken(token: string){
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null{
    return localStorage.getItem(this.tokenKey);
  }

  getExpirationDate(token: string): Date | null{
    const decodedToken = jwtDecode(token);
    if(decodedToken && decodedToken.exp){
      const date = new Date(0);
      date.setUTCSeconds(decodedToken.exp);
      return date;
    } else{
      return null;
    }
  }

}
