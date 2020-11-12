import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from  './home.component'
import { AdminComponent } from './admin/admin.component'
import { CommonModule} from '@angular/common'

const routes: Routes = [{
  path:'', component: HomeComponent,
  children: [
    { path: '', redirectTo: 'createuser', pathMatch: 'full' },
    { path: 'createuser', loadChildren: () => import('../home/createuser/createuser.module').then(mod => mod.CreateuserModule)},
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