import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit  {

  signupForm!: FormGroup;
  submitted = false;

user = {
  firstName:'',
  lastName:'',
  email:'',
  password:'', 
  bio:''

}
profile_picture:any 
constructor (private formBuilder:FormBuilder, private router:Router,private authSerivce:AuthService) {}


select(e:any) {
  this.profile_picture=e.target.files[0]
}
register () {

  let fd=new FormData() ;
  fd.append('firstName',this.signupForm.get('firstName')?.value) ;
  fd.append('lastName',this.signupForm.get('lastName')?.value) ;
  fd.append('email',this.signupForm.get('email')?.value) ;
  fd.append('password',this.signupForm.get('password')?.value) ;
  fd.append('bio',this.signupForm.get('bio')?.value) ;
  fd.append('profile_picture',this.signupForm.get('profile_picture')?.value)



  this.authSerivce.register(fd).subscribe(result=> {
this.router.navigate(['/login']);
  }, error => {
console.log("ERROR",error)
  })
}


  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      emailName:['', Validators.required],
      password:['', Validators.required],
      bio:['', Validators.required],
      profile_picture:['', Validators.required],


      
    })
    
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.signupForm.invalid) {
      return 
    }

    this.register();
  }






  

}
