import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Módulo compartido con los componentes de Angular Material
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { routing } from './auth-routing';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    MaterialModule
  ],
  declarations: [LoginComponent, LogoutComponent]
})
export class AuthModule { }
