import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 

  constructor (private router: Router, private authSerivce:AuthService)
  {}

  canActivate() {
    if (this.authSerivce.isLoggedIn()) {
      return true; 
    } else {
      this.router.navigate(['/login']);
      return false; 
    }
    

  }
    
  }

  

