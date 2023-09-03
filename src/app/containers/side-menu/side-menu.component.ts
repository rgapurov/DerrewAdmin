import { Component, OnInit } from '@angular/core';
import { navItems, spinner } from 'src/app/_nav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  allNavItems = navItems;
  constructor(public router: Router,) { }

  ngOnInit() {
    this.setMenuActive();
  }
  ToggleMenu(menu:string){
    sessionStorage.getItem(menu)!= null ? sessionStorage.removeItem(menu): sessionStorage.setItem(menu,menu);
    this.setMenuActive();
    this.allNavItems.forEach(item => {
    });
   }
   setMenuActive(){
    this.allNavItems.forEach(item => {
      item.isActive = sessionStorage.getItem(item.name)!= null ? true: false;
    });
   }
}
