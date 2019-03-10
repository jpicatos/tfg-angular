import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    children: [
      //{ path: '', loadChildren: './asignaturas/asignaturas.module#AsignaturasModule' },
      { path: '', loadChildren: './auth/auth.module#AuthModule'},
      { path:'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
