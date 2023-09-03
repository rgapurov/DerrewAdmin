import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requestStart();
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event.type === 4) {
            this.requestEnd();
          }
        },
        (error) => {
            this.requestEnd();
        }
      )
    );
  }

  private requestStart() {
    document.getElementById("spinner")?.classList.add('visible');
  }

  private requestEnd() {
    document.getElementById("spinner")?.classList.remove('visible');
  }
}