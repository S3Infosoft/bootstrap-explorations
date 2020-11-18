import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  showView: Boolean = false;
  showEdit: Boolean = false;
 showModal: Boolean = false;
 showError: boolean = false;
  constructor(  private r: Router , private auth: AuthService  , private spinner: SpinnerService ,  private http :HttpClient ) {  }

  ngOnInit(): void {
    this.getApiData()
  }

  onSave(){
    if ( !this.enteredValue._id){
   console.log(this.enteredValue);
   this.auth.createUser( this.enteredValue.name , this.enteredValue.email , this.enteredValue.password , this.enteredValue.role);
   this.getApiData()
   this.enteredValue = {};
   this.showView = false;
    }else 
    this.auth.updateUser( this.enteredValue._id, this.enteredValue.name , this.enteredValue.email , this.enteredValue.password , this.enteredValue.role);
    this.getApiData();
    this.showView = false;
    this.enteredValue = {}
  }


  getApiData(){
    this.auth.getData( ).
    subscribe((response : any) =>
    {
      this.displayUsers = response.message
      console.log( 'response from API' ,response)
      this.spinner.requestEnded();
    }), (error) => {
      console.log( 'error is' , error)
      this.spinner.requestEnded();
    }
  }


  onCancel(){
  this.enteredValue = {};
  this.showView = false;
  }

  onclick(){
    this.r.navigate(['/home'])
  }


  onclickDelete(userid: string) {
    this.showModal= true;
    console.log(userid)
   this.enteredValue._id = userid;
  }

  onEdit(userid: string) {
    this.showView = true;
   this.enteredValue = JSON.parse(JSON.stringify(this.displayUsers[userid]))
   this.enteredValue._id = userid;
   console.log(this.enteredValue)
  }

  addNewItem(){
    this.showView = true;
  }

  ondelete(){
    this.http.delete('/users/deleteUser/'+ this.enteredValue._id).subscribe((response) =>
    {
      console.log( 'response from API' ,response);
    }), (error) => {
      console.log( 'error is' , error)
    }
    this.getApiData();
   }
   
 
  passwordsMatch() {
    if (this.enteredValue.password !== this.enteredValue.password1) {
      this.showError = true;
    } else {
      this.showError = false;
    }
  }
}
