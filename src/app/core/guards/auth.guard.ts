import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isTokenExpired:boolean;

  constructor(private router: Router, private toastrService: ToastrService,private authService:AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const isLoggedIn = localStorage.getItem('token');


    if (isLoggedIn != null) {
      const currentTime = new Date();
      const tokenTime = new Date(String(localStorage.getItem('expiration')));
      this.isTokenExpired = currentTime > tokenTime ? true : false
      if (this.isTokenExpired == true) {
        localStorage.setItem('tokenExpired',Math.random().toString())
      }
    }

    if (isLoggedIn == null || this.isTokenExpired == true) {
      this.authService.logOut();
    }
    return true;
  }
}
