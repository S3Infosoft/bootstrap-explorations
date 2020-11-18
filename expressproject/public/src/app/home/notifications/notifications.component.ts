import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { AuthService } from 'src/app/auth/auth.service';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notificationsBar  : any =[];
  notifications : any =[];
  Readnotifications : any =[];
  length: any = [{ n : 5}]
  number:any;
  ReadnotificationsRev: any =[];
  notificationsRev: any =[];
  constructor(  private _as: AppService , private auth : AuthService , private spinner: SpinnerService , private http: HttpClient ) { }

  ngOnInit(): void {
    this.getNotify();
    this. getReads();
  }


  markAllRead(){
      return this.http.post ('/api/ReadData', this.notifications
      ).subscribe((response) =>
      {
        console.log( 'response from API' ,response)
        this.deleteRead();
       this.getNotify();
       this.getReads()
      }), (error) => {
        console.log( 'error is' , error)
      }
     
  }

deleteRead(){
  this.http.delete('/api/deleteRead').subscribe((response) =>
    {
      console.log( 'response from API' ,response);
    }), (error) => {
      console.log( 'error is' , error)
    }
}

  getNotify(){
    this._as.getNotify( ).
    subscribe((response : any) =>
    {
      this.notificationsRev= response.message;
      this.notifications = this.notificationsRev.reverse()
      this.number = [{ n : this.notifications.length}]
     if( this.notifications.length > 20 ){
       this.length = [{ n : "20+"}]
     } else 
     this.length =  this.number
      console.log( 'response from API', response.message)
      this.spinner.requestEnded();
    }), (error) => {
      console.log( 'error is' , error)
      this.spinner.requestEnded();
    }
  }

  getReads(){
    this._as.getRead( ).
    subscribe((response : any) =>
    {
      this.ReadnotificationsRev= response.message[0].message;
      this.Readnotifications = this.ReadnotificationsRev.reverse()
      this.notificationsBar = this.Readnotifications.slice(this.Readnotifications.length - 30 , this.Readnotifications.length)
      console.log( 'response from API',response.message)
      this.spinner.requestEnded();
    }), (error) => {
      console.log( 'error is' , error)
      this.spinner.requestEnded();
    }
  }


  over(){
  }
  
}
