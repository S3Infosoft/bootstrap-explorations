import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const ROUTES:Routes=[{ path: '', component: NotificationsComponent}];

@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES) ,
  ]
})
export class NotificationsModule { }
