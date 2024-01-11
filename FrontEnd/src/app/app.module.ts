import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    MyPostsComponent,
    LikedPostsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
