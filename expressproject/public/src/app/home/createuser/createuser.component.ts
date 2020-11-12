import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  enteredValue : any = {};
  userDetails : any =[]
  displayUsers : any =[]
  user: any = {};
  showWrong: boolean = false;
  isAddNewItem: boolean = true;
  showView: Boolean = false
showModal: Boolean = false
  constructor(  private r: Router , private auth: AuthService ) {  }

  ngOnInit(): void {
  
  }

  onSave(){
   console.log(this.enteredValue);
   this.auth.createUser(this.enteredValue.email , this.enteredValue.password , this.enteredValue.role);
   this.displayUsers = this.enteredValue
   this.enteredValue = {}
  }

  onCancel(){
  this.enteredValue = {}
  }

  onclick(){
    this.r.navigate(['/home'])
  }


  onclickDelete(i) {
    this.showModal= true
  }

  onEdit(i) {
this.enteredValue = JSON.parse(JSON.stringify(this.displayUsers[i]))
  }

  addNewItem(){
    this.showView = true;
    this.isAddNewItem = true;
  }

  onDelete(){
    
  }
}
