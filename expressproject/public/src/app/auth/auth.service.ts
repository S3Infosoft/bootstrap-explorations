import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthData } from './auth-data.model'
import { Router } from '@angular/router';
import { AppService} from '../app.service';
import {  AuthModel} from './auth.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token : string;
  isLoading : boolean = false;
   userId :string;
   role:string;

  constructor(  private http :HttpClient , private router : Router , private _as: AppService ) { }


  createUser( name: string , email: string , password : string , role: string ) {

   const  authData : AuthData = { name: name , email: email , password: password, role:role }
    this.http.post("/users/signup" , authData).subscribe( response => {
      console.log(response);
      
    })
    
    }

    updateUser( userid: string , name: string , email: string , password : string , role: string ) {
        console.log("update");
      const  authData : AuthData = { name: name , email: email , password: password, role:role }
       this.http.put("/users/updateUser/" + userid , authData).subscribe( response => {
         console.log(response);
       })
       }
       
    getUserId(){
      const userId = localStorage.getItem('userId')
      return userId
    }
    
    login(  email: string , password : string ) {
      const  authData :  AuthModel = {  email: email , password: password }
       this.http.post<{ token : string , userId : string , role:string}>("/users/login" , authData).subscribe( response => {
        const token = response.token
        this.token = token;
        this.userId = response.userId;
        this.role = response.role;
         console.log(response);
         localStorage.setItem( 'token' , this.token)
        //  this.router.navigate(['/home']);
         localStorage.setItem('userId' , this.userId)
         localStorage.setItem( 'role', this.role)
         console.log(this.role)
         if( this.role == "Admin "){
          this.router.navigate(['/home'])
         }
         else if ( this.role == "User "){
         this.router.navigate(['/posts'])
         }
 else;
   this.router.navigate(['/home'])
       })
       }

       loggedIn(){
         const token = localStorage.getItem('token')
          return token;
       }

       logout(){
       localStorage.setItem( 'token' , null);
       localStorage.setItem( 'userId' , null)
        this.router.navigate(['/login'])
       } 

       getData( ) {
        return this.http.get ('/users/getUsers')
        }

       

}
