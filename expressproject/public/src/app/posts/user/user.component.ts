import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private auth :AuthService) { }

  ngOnInit(): void {
  }


  onlogout(){
    this.auth.logout()
      }
}
