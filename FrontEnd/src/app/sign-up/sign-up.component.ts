import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit  {


user = {
  firstName:'',
  lastName:'',
  email:'',
  password:'', 
  bio:''

}
profile_picture:any 
constructor (private router:Router,private authSerivce:AuthService) {}

select(e:any) {
  this.profile_picture=e.target.files[0]
}
register () {

  let fd=new FormData() ;
  fd.append('firstName',this.user.firstName) ;
  fd.append('lastName',this.user.lastName) ;
  fd.append('email',this.user.email) ;
  fd.append('password',this.user.password) ;
  fd.append('bio',this.user.bio) ;
  fd.append('profile_picture',this.profile_picture)



  this.authSerivce.register(fd).subscribe(result=> {
this.router.navigate(['/login']);
  }, error => {
console.log("ERROR",error)
  })
}
  ngOnInit(): void {
    
  }

}
