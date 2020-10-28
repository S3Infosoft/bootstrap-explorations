import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './root-components/login/login.component';
import { SignupComponent } from './root-components/signup/signup.component'
import { UserComponent } from './users/components/user/user.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UserComponent }
  // { path: 'users', loadChildren: () => import('./users/user.module').then(mod => mod.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
