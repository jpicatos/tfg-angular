import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ProfesoresDetailsComponent } from './profesores/profesores-details/profesores-details.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: './auth/auth.module#AuthModule'},
      { path:'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
      { path:'config', component: ConfigurationComponent, canActivate: [AuthGuardService]},
      { path:'mi-cuenta', component: ProfesoresDetailsComponent, canActivate: [AuthGuardService]},
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
