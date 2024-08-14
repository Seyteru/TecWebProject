import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Request made to: ", req.url);
    return next.handle(req).pipe(
      tap( event => {
        console.log("Response received from: ", req.url);
      })
    )
  }
  
}
