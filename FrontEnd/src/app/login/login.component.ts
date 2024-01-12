import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



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
   constructor (private router:Router,private authSerivce:AuthService) {}

login () {
  
  this.authSerivce.login(this.user).
  subscribe( result =>{
this.token=result ; 
console.log("resullltttt ",result) 
localStorage.setItem('token',this.token.token)
this.router.navigate(['/home'])
  } , error => {

  }

  )

}
 
  ngOnInit(): void {
   
  }

}
