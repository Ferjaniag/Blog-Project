import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email :' ',
    password:''
  }

  token : any ;
  constructor (private AuthSerivce:AuthService,private router:Router) {}
login () {
  this.AuthSerivce.login(this.user).
  subscribe( result =>{
this.token=result ; 
localStorage.setItem('token',this.token.token)
this.router.navigate(['/home'])
  } , error => {

  }

  )

}
 
  ngOnInit(): void {
   
  }

}
