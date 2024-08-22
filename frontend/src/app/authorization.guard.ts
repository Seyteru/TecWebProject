import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from './services/token.service';

export const authorizationGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const tokenService = inject(TokenService);
  const token = tokenService.getToken();

  if(token){
    return true;
  } else{
    router.navigate(['/login']);
    return false;
  }

};
