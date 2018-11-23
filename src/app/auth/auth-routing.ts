import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'salir', component: LogoutComponent }
      ]
    }
  ];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
