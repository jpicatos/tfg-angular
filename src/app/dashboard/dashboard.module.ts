import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from "./dashboard-routing";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
