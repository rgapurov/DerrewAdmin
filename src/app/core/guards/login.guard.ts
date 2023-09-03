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

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  isTokenExpired:boolean;

  constructor(
    private router:Router,
    private toastrService:ToastrService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const isLoggedIn = localStorage.getItem('token');


    if (isLoggedIn != null) {
      const currentTime = new Date();
      const tokenExpireTime = new Date(String(localStorage.getItem('expiration')));
      this.isTokenExpired = currentTime > tokenExpireTime ? true : false
    }

    if (isLoggedIn != null && this.isTokenExpired == false) {
      this.router.navigate(['home'])
      return false;
   }
   return true;
  }
}
