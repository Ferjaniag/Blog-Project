import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  user = {
    email: '',
    password: ''
  };

  token: any;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {}

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (result) => {
        this.token = result;
        console.log("result: ", result);
  
        if (this.token.token) {
          localStorage.setItem('token', this.token.token);
          this.router.navigate(['/home']);
        } else {
          alert('Login failed. Please check your email and password and try again.');
        }
      },
      (error) => {
        console.log("LOGIN ERROR", error);
  
        if (error.status === 401) {
          alert('Incorrect email or password. Please try again.');
        } else {
          alert('Login failed. Please try again.');
        }
      }
    );
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.login(); 
  }
}