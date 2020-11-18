import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const ROUTES:Routes=[{ path: '', component: DashboardComponent}];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES) ,
  ]
})
export class DashboardModule { }
