import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRequestModel } from 'src/app/core/models/request/login-request.model';
import { UserInLoginModel } from 'src/app/core/models/response/login-response.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;
  isClicked:boolean= false;
  loggedInUser:UserInLoginModel;
  returnedMessage:string;
  NU:number=0;
  username:string = '';
  password:string = '';
  userInLogin:LoginRequestModel = {
    email:"",
    password:"",
  };
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router :Router,
    private toastrService:ToastrService,
  ) {

  }

  ngOnInit(): void {
    this.NU = Math.floor(Math.random() * 5);
  }
  focused(id:string){
    document.getElementById(id)?.classList.remove('color-blue');
    document.getElementById(id)?.classList.add('color-orange');
  }
  blured(id:string){
    document.getElementById(id)?.classList.remove('color-orange');
    document.getElementById(id)?.classList.add('color-blue');
  }



  onSubmit() {

      this.userInLogin.email = this.username;
      this.userInLogin.password = this.password;
      
      this.authService.loginRequest(this.userInLogin).subscribe((res)=> {
        if (res.status == 0) {
            localStorage.setItem('userId',String("000"));
            localStorage.setItem('userName',String(this.username));
            localStorage.setItem('token',res.data.accessToken);
            localStorage.setItem('expiration',String(res.data.expiration));
            localStorage.setItem('login-event',Math.random().toString());
            this.authService.navigateToLoginPage();        }
      },(error) =>{
        if (error.status == 400) {
          this.isClicked= false;
          this.returnedMessage = error.error.message;

        }
      })
  }
}
