import { HttpErrorResponse, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, empty, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from "rxjs/internal/operators";
import { AvisosService } from '../services/avisos.service';
import { AuthenticationService, Token } from './authentication.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService, private avisosService: AvisosService) { }

  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {

    let errMsg = '';

    return next.handle(this.addTokenToRequest(request, this.authService.getAuthToken()))
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {

            if (err.url) {
              if (err.url.includes('/token/refresh/')) {
                for (var key in err.error) {
                  if (err.error.hasOwnProperty(key)) {
                    errMsg = JSON.stringify(err.error[key]).replace(/[^\w\s]/gi, " ");
                  }
                }
                return <any>this.authService.logout();
              }
            }

            switch ((<HttpErrorResponse>err).status) {
              case 401:
                return this.handle401Error(request, next);
              case 400:
                this.avisosService.enviarMensaje(JSON.stringify(err.error));
                return empty();
              case 403:
                this.avisosService.enviarMensaje("No tienes permisos para realizar la acción");
                return empty();
              case 0:
                this.avisosService.enviarMensaje("Hay problemas de conexión con el servidor");
                return empty();
              default:
                return throwError(err);
            }

            
          } else {
            return throwError(err);
          }
        }));
  }

  private addTokenToRequest(request: HttpRequest<any>, token: string) : HttpRequest<any> {
    const url = 'http://docenciafdi.me';
    return request.clone({ url: url + request.url, setHeaders: { Authorization: `Bearer ${token}`}});
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {

    if(!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null);

      return this.authService.refresh()
        .pipe(
          switchMap((user: Token) => {
            if(user) {
              this.tokenSubject.next(user.access);
              localStorage.setItem('currentUser', JSON.stringify(user.access));
              return next.handle(this.addTokenToRequest(request, user.access));
            }

            return <any>this.authService.logout();
          }),
          catchError(err => {
            window.location.reload();
            return <any>this.authService.logout();
          }),
          finalize(() => {
            this.isRefreshingToken = false;
          })
        );
    } else {
      this.isRefreshingToken = false;

      return this.tokenSubject
        .pipe(filter(token => token != null),
          take(1),
          switchMap(token => {
          return next.handle(this.addTokenToRequest(request, token));
        }));
    }
  }
}