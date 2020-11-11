import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private r: Router) { }

  ngOnInit(): void {
  }

  onSignUp(){
    this.r.navigate(['/login'])
  }

  onSignIn(){
    this.r.navigate(['/login'])
  }

}
