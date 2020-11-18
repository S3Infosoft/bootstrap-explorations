import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from  './home.component'
import { AdminComponent } from './admin/admin.component'
import { CommonModule} from '@angular/common'

const routes: Routes = [{
  path:'', component: HomeComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => import('../home/dashboard/dashboard.module').then(mod => mod.DashboardModule)},
    { path: 'createuser', loadChildren: () => import('../home/createuser/createuser.module').then(mod => mod.CreateuserModule)},
    { path: 'notifications', loadChildren: () => import('../home/notifications/notifications.module').then(mod => mod.NotificationsModule)},
  ], runGuardsAndResolvers: 'always',
}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {  }

export const routingComponents = [HomeComponent ,  AdminComponent]