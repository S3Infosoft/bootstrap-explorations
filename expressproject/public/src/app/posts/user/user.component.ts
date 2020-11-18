import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayItems  = [];
  notifications = [];
  length : any = [ ]
  postperpage = 2;
  
  constructor( private auth :AuthService) { }

  ngOnInit(): void {
  }


  onlogout(){
    this.auth.logout()
      }
}
