import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url="http://localhost:5002/"

  constructor(private http:HttpClient ) { }

  register(user:any) {
    return this.http.post(this.url+'register',user) ;
  }


  login (user : any ) {
  
    return this.http.post(this.url+'signIn',user) ;
  }


  isLoggedIn() {
    let token=localStorage.getItem('token')  ; 
    if (token){
      return true ;
    } else {
      return false;
    }
  }



}
