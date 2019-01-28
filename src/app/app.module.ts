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

import { HttpErrorInterceptor } from './errors/error-handler';
import { EleccionDocenciaModule } from './eleccion-docencia/eleccion-docencia.module';
// import { CustomGoogleCalendarComponent } from './custom-google-calendar/custom-google-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    // CustomGoogleCalendarComponent
  ],
  imports: [
    AsignaturasModule,
    ProfesoresModule,
    EleccionDocenciaModule,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
