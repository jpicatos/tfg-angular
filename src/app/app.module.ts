import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { ProfesoresModule} from './profesores/profesores.module';
import { routing } from './app-routing';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { AuthenticationService } from './auth/authentication.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AsignaturasModule,
    ProfesoresModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    routing,
  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
