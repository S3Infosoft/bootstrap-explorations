import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service';
import { AuthService } from '../auth/auth.service'
import { SpinnerService } from '../shared/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _as: AppService , private auth : AuthService , private spinner: SpinnerService ) { }

  displayItems  = [];
  notifications = [];
  length : any = [ ]
  postperpage = 2;
  number : any =[];
  notificationsBar = []
  ngOnInit(): void {
    this.getApiData();
  }

  getApiData(){
    this._as.getData( this.postperpage , 1).
    subscribe((response : any) =>
    {
      this.displayItems= response.message;
      console.log( 'response from API' ,response.message)
      this.getNotify();
      this.spinner.requestEnded();
    }), (error) => {
      console.log( 'error is' , error)
      this.spinner.requestEnded();
    }
  }

  getNotify(){
    this._as.getNotify( ).
    subscribe((response : any) =>
    {
      this.notifications= response.message;
      this.notificationsBar = this.notifications.slice(this.notifications.length - 5 , this.notifications.length)
      console.log(this.notificationsBar)
      this.number = [{ n : this.notifications.length}]
     if( this.notifications.length > 5 ){
       this.length = [{ n : "5+"}]
     } else 
     this.length =  this.number
      console.log( 'response from API',response.message)
      this.spinner.requestEnded();
    }), (error) => {
      console.log( 'error is' , error)
      this.spinner.requestEnded();
    }
  }



  onlogout(){
    this.auth.logout()
  }
}
