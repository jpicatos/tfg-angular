import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AvisosService } from '../services/avisos.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private avisosService: AvisosService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errMsg = '';
          // Client Side Error
          if (error.error instanceof ErrorEvent) {
            errMsg = `Error: ${error.error.message}`;
          }
          else {  // Server Side Error
            //errMsg = `Error Code: ${error.status},  Message: ${error.error}`;

            for (var key in error.error) {
              if (error.error.hasOwnProperty(key)) {
                errMsg = JSON.stringify(error.error[key]).replace(/[^\w\s]/gi, " ");
              }
            }
          }
          this.avisosService.enviarMensaje(errMsg);
          return throwError(errMsg)
        })
      )
  }
}   
