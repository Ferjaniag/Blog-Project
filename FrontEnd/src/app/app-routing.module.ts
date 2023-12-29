import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [

  
  {
    component:SignUpComponent,
    path: 'signup',
  },
  {
    component:HomeComponent,
    path: 'home',
  },
  {
    component:LoginComponent,
    path: 'login',
  },
  {
    component:LandingPageComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
