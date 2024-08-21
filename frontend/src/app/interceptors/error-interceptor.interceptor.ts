import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export class ErrorInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        if(error.error instanceof ErrorEvent){
          errorMessage = `Error: ${error.error.message}`;
        } else{
          errorMessage = `Error Code: ${ error.status }\nMessage: ${ error.message }`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      })
    );
  }

}
