import { HttpInterceptorFn } from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenKey = 'authToken';
  const token = localStorage.getItem(tokenKey);
  const articleApi = req.url.includes('/api/articles');
  const authorApi = req.url.includes('/api/articles/author');
  const authApi = req.url.includes('/api/auth/register')
  const methodsToIntercept = req.method == 'PUT' || req.method == 'POST' || req.method == 'DELETE';

  if((articleApi && methodsToIntercept) || authApi || authorApi){
    if(token){
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(authReq);
    }
  }
  return next(req);

};
