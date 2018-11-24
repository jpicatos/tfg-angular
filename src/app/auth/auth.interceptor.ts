import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public auth: AuthenticationService, private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const url = 'http://tfg.davidarroyo.es';
        let headers = {};

        let token = JSON.parse(localStorage.getItem('token'));

        if (token) {
            headers = { Authorization: "Token " + token };
        }

        request = request.clone({
            url: url + request.url,
            setHeaders: headers
        });
        
        return next.handle(request);
    }
}