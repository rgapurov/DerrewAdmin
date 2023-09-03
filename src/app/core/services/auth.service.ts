import { Injectable, OnDestroy } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRequestModel } from '../models/request/login-request.model';
import { SingleResponseModel } from '../models/response/single-response.model';
import { LoginResponseModel } from '../models/response/login-response.model';
import { Router } from '@angular/router';
import { UserResponseModel } from '../models/response/user-response.model';
import { map, Observable } from 'rxjs';


const Endpoints = {
  VALİDATE_SECURİTY_CODE: '/User/ValidateSecurityCode',
  SET_NEW_PASSWORD:'/User/SetNewPassword'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,private router:Router) {

  }


 loginRequest(loginRequestModel: LoginRequestModel){
   return this.httpClient.post<SingleResponseModel<LoginResponseModel>>(environment.apiUrl + '/Auth/AdminLogin',loginRequestModel);
 }

 setNewPassword(username:string,pass:string){
  return this.httpClient.get<any>(environment.apiUrl + Endpoints.SET_NEW_PASSWORD + "?username=" + username + '&pass=' + pass );
 }

 validateSecurityCode(username:string,securityCode:string):Observable<boolean>{
  return this.httpClient.get<boolean>(environment.apiUrl + Endpoints.VALİDATE_SECURİTY_CODE+ "?username=" + username +'&securityCode=' + securityCode).pipe(map((response) => response));
 }


 logOut(): void {
  localStorage.removeItem('userId');
  localStorage.removeItem('userName');
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  this.router.navigate(['/login']);
}

 navigateToLoginPage(){
  this.router.navigate(['/home'])
 }



}
