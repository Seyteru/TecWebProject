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

  isTokenExpired(token: string): boolean{
    const expiration = this.getTokenExpirationDate(token);
    if(expiration){
      return (expiration <= new Date);
    } else{
      return false;
    }
  }

  getTokenExpirationDate(token: string): any | null{
    const decodedToken: any = jwtDecode(token);
    if(decodedToken && decodedToken.exp){
      return decodedToken.exp;
    } else{
      return null;
    }
  }

}
