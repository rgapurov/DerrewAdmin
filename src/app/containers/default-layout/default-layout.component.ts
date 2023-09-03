import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { navItems, spinner } from 'src/app/_nav';



@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css'],
})
export class DefaultLayoutComponent implements OnInit {

  allNavItems = navItems;
  loggedInUserName: string | null = '';
  drpChart: boolean;
  drpChartStatus: string = sessionStorage.getItem('drpChart') == null?'false': String(sessionStorage.getItem('drpChart'));
  isSpin = spinner
  isClosed:boolean = false;
  

  constructor(
    public router: Router,
    private authService: AuthService,
  ) {}

  
  ngOnInit(): void {
    this.getUserName();
    this.getInitialOfUserName();
  }
  
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  getInitialOfUserName() {
    let initial = this.loggedInUserName?.charAt(0).toUpperCase();
    return initial;
  }

  getUserName(): void {
    this.loggedInUserName = localStorage.getItem('userName');
  }
 logOut(){
  localStorage.setItem('logout-event',Math.random().toString())
  this.authService.logOut();
 }
 toggleMenu(){
  this.isClosed = !this.isClosed;
  if(this.isClosed){
    document.getElementById('toggle-div')?.classList.remove('open-side');
    document.getElementById('toggle-div')?.classList.add('close-side');
    document.getElementById('aside-div')?.classList.remove('aside-open');
    document.getElementById('aside-div')?.classList.add('aside-close');
    document.getElementById('main-div')?.classList.remove('open-main');
    document.getElementById('main-div')?.classList.add('close-main');
    document.getElementById('toggle-icon')?.classList.remove('open-toggle-icon');
    document.getElementById('toggle-icon')?.classList.add('close-toggle-icon');
  }
  else{
    document.getElementById('toggle-div')?.classList.add('open-side');
    document.getElementById('toggle-div')?.classList.remove('close-side');
    document.getElementById('aside-div')?.classList.add('aside-open');
    document.getElementById('aside-div')?.classList.remove('aside-close');
    document.getElementById('main-div')?.classList.remove('close-main');
    document.getElementById('main-div')?.classList.add('open-main');    
    document.getElementById('toggle-icon')?.classList.remove('close-toggle-icon');
    document.getElementById('toggle-icon')?.classList.add('open-toggle-icon');
  }

 }
}
