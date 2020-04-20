import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private maxWaiting = 45000;

  constructor(
    private injector: Injector,
    private translateService: TranslateService
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userService = this.injector.get(UserService);

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userService.getAuthToken()}`
      }
    });

    return next.handle(request).pipe(
      timeout(this.maxWaiting),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public handleError(error: any) {
    const userService = this.injector.get(UserService);
    const router = this.injector.get(Router);

    switch ((error as HttpErrorResponse).status) {
      case 401:
        // userService.removeUserLoggedInfoFromCache();
        router.navigate(['/login']);
        return this.handleDefaultError(error);

      case 403:
        router.navigate(['/403'], { skipLocationChange: true });
        return this.handleDefaultError(error);

      case 404:
        router.navigate(['/404'], { skipLocationChange: true });
        return this.handleDefaultError(error);

      default:
        return this.handleDefaultError(error);
    }

  }

  public handleDefaultError(error: any) {
    const messageToUser: any =
      error && error.error && error.error.message
        ? error.error.message
        : this.translateService.instant('ERRORS.DEFAULT_HTTP_ERROR');
    const messageToDebug: any =
      error && error.error && error.error.error ? error.error.error : 'ERROR_NOT_DEFINED';

    return observableThrowError({ error: messageToDebug, message: messageToUser });
  }
}
