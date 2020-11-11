import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule} from "@angular/material/paginator";
import { PostRoutingModule  , routingComponent} from '../posts/post-routing.module'


@NgModule({
  declarations: 
    routingComponent,
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    PostRoutingModule
  ]
})
export class PostsModule { }
