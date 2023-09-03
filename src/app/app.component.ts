import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  constructor(private authService: AuthService) {
    this.start();
  }

  @HostListener('document:mousemove', ['$event'])
  documentMouseMove(event: MouseEvent) {
    var expiration = localStorage.getItem('expiration');
    if (expiration != null) {
      var tokenTime = new Date(String(localStorage.getItem('expiration')));
      var currentTime = new Date();
      var isTokenExpired = currentTime > tokenTime ? true : false;
      if (window.location.href.split('#/')[1] != 'login') {
        if (isTokenExpired == true ) {
          localStorage.setItem('logout-event',Math.random().toString())
          this.authService.logOut();
        } else {
          tokenTime = new Date(currentTime.getTime() + 10 * 60000);
          localStorage.setItem('expiration', String(tokenTime));
        }
      }


      // this.newExpiration = String(newExpireTime.setUTCDate());
      // localStorage.setItem('expiration',expiration);
    }
  }

  private start(): void {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea == localStorage) {
      if (event?.key && event.key == 'logout-event') {
        this.authService.logOut();
      }
      if (event?.key && event.key == 'login-event') {
        this.authService.navigateToLoginPage();
      }
      if (event?.key && event.key == 'tokenExpired') {
        this.authService.logOut();
      }
    }
  }

  private stop() {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
