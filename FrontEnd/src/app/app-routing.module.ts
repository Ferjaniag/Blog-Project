import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';

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
  {
    component:ProfileComponent,
    path: 'profile',
  },
  {
    component:LikedPostsComponent,
    path: 'likedposts',
  },
  {
    component:MyPostsComponent,
    path: 'myposts',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
