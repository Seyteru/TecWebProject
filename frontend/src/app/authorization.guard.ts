import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

export const authorizationGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if(authService.isUserAuth()){
    return true;
  } else{
    router.navigateByUrl("/login");
    return false;
  }

};
