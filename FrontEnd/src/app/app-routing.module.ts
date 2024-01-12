import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

  
  {
    component:SignUpComponent,
    path: 'signup',
  },
  {
    component:HomeComponent,
    canActivate : [AuthGuard] , 
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
  {
    component:ProfileComponent,
    canActivate : [AuthGuard] , 
    path: 'profile',
  },
  {
    component:LikedPostsComponent,
   canActivate : [AuthGuard] , 
    path: 'likedposts',
  },
  {
    component:MyPostsComponent,
    canActivate : [AuthGuard] , 
    path: 'myposts',
  },
  {
    component:TestComponent,
    path: 'test',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
