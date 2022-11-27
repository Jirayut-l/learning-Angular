import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = req.clone({
      setHeaders: { Authorization: 'myAuthToken' },
    });
    console.log('Intercepted HTTP call', authReq);
    console.log('Intercepted HTTP Head', authReq.headers.get('Authorization'));
    return next.handle(authReq);
  }
}
