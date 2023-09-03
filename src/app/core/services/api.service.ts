import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SingleResponseModel } from '../models/response/single-response.model';
import { UserResponseModel } from '../models/response/user-response.model';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  getUserById(id:number):Observable<SingleResponseModel<UserResponseModel>>{
    return this.httpClient.get<SingleResponseModel<UserResponseModel>>(environment.apiUrl + '/User/GetUser/?id=' + id).pipe(map((response) => response));
  }  
}
