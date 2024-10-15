import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { TokenService } from '../services/token.service';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenKey = 'authToken';
  const token = localStorage.getItem(tokenKey);
  const articleApi = req.url.includes('/api/articles');
  const authorApi = req.url.includes('/api/articles/author');
  const authApi = req.url.includes('/api/auth/register');
  const methodsToIntercept = req.method == 'PUT' || req.method == 'POST' || req.method == 'DELETE';
  const authService = inject(AuthenticationService);
  const tokenService = inject(TokenService);

  if((articleApi && methodsToIntercept) || authApi || authorApi){
    if(token){
      const expiration = tokenService.getExpirationDate(token);
      const now = new Date().getTime();
      if(expiration && expiration.getTime() - now > 0){
        const authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next(authReq);
      } else{
        authService.logout();
      }
    } else{
      authService.logout();
    }
  }
  return next(req);

};
