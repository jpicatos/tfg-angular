import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { routing } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AsignaturasModule,
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
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
