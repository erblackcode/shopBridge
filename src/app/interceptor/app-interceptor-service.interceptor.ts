import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Productinterface } from '../productdetails/interface/productinterface';

@Injectable()
export class AppInterceptorServiceInterceptor implements HttpInterceptor {

  constructor() {}

  // Error Handling

  private handleError(error: HttpErrorResponse){
  
    if(error.status===0){
      console.error('An error is occured '+ error.error);
    }
    else{
      console.error('Backend returned code '+ error.status+', body was: ', error.error)
    }
    return throwError('Something going Wrong');

  }

  intercept(request: HttpRequest<Productinterface>, next: HttpHandler): Observable<HttpEvent<Productinterface>> {
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authToken': 'Aut-token-key'
    });

    const clone = request.clone({
      headers: headers
    });
   
    return next.handle(clone).pipe(
      catchError(this.handleError
        ));
  }
}
