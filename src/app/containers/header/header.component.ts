import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(public router: Router,
    private authService: AuthService,) { }

  ngOnInit() {
  }
  logOut(){
    localStorage.setItem('logout-event',Math.random().toString())
    this.authService.logOut();
   }
}
