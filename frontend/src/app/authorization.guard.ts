import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from './services/token.service';
import { ArticleService } from './services/article.service';
import { catchError, of, switchMap } from 'rxjs';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';

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

export const authorizationNotLogged: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  if(!authService.isLoggedIn()){
    return true;
  } else{
    router.navigate(['/home']);
    return false;
  }
}

export const authorizationAdminOrOwner: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const tokenService = inject(TokenService);
  const userService = inject(UserService);
  const token = tokenService.getToken();
  const articleId = Number(route.paramMap.get('id'));
  const articleService = inject(ArticleService);
  const userRole = userService.getUserRole();
  const userId = userService.getUserId();

  if(token){
    return articleService.getArticleById(articleId).pipe(
      switchMap(article => {
        if(userRole == 'admin' || article.userId == userId){
          return of(true);
        } else{
          return of(router.createUrlTree(['/home']));
        }
      }),
      catchError(() => {
        return of(router.createUrlTree(['/home']));
      })
    );
  } else{
    router.navigate(['/home']);
    return false;
  }

};

export const authorizationAdmin: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const tokenService = inject(TokenService);
  const userService = inject(UserService);

  const token = tokenService.getToken();
  const userRole = userService.getUserRole();

  if(token){
    if(userRole == 'admin'){
      return true;
    } else{
      router.navigate(['/home']);
      return false;
    }
  } else{
    router.navigate(['/home']);
    return false;
  }

};
