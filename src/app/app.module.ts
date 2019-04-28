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

import { EleccionDocenciaModule } from './eleccion-docencia/eleccion-docencia.module';
import { UtilComponentsModule } from "./util-components/util-components.module";
import { GlobalConfigService } from './services/global-config.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from './material/material.module';
import { ConfigurationComponent, ResetConfirm } from './configuration/configuration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConfigurationComponent,
    ResetConfirm
  ],
  imports: [
    AsignaturasModule,
    ProfesoresModule,
    EleccionDocenciaModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    UtilComponentsModule,
    ChartsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
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
    AuthGuard,
    GlobalConfigService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ResetConfirm]
})
export class AppModule { }
