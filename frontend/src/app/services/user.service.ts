import { inject, Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { jwtDecode } from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private tokenService = inject(TokenService);

  getUserRole(): string | null{
    const token = this.tokenService.getToken();
    if(token){
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role;
    }
    return null;
  }

  isAdmin(): boolean{
    const role = this.getUserRole();
    return role == 'admin';
  }

}
