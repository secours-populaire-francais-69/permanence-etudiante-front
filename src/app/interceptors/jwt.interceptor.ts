import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  handleInterception(request: HttpRequest<any>, next: HttpHandler) {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: localStorage.getItem('jwt') as string,
          'Content-Type': 'application/json',
        },
      });
    }
    return next.handle(request);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.handleInterception(request, next);
  }
}
