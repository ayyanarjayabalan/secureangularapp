import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class MockInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.endsWith('dashboard.json')) {
      return of(null).pipe(
        mergeMap(() => {
          console.log('Real dashboard request blocked and return mock response');
          return of(new HttpResponse( { body: { revenue: 20000, profit: 5000 }}))
        })
      );
    }
    return next.handle(request);
  }
}
