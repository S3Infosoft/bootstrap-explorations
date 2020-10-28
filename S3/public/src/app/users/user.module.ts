import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule , routingComponents} from './user-routing.module'


@NgModule({
  declarations:routingComponents,
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
