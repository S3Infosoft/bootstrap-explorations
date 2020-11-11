import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { UserComponent } from './user/user.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'', component: UserComponent,
  children: [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: PostsComponent },
  ], runGuardsAndResolvers: 'always',
}];



@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class PostRoutingModule { }
export const routingComponent = [PostsComponent ,UserComponent]