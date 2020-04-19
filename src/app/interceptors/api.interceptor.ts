import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { UserService } from '../services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private userService: UserService,
    private translateService: TranslateService
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.userService.getTokenSilently$().pipe(
      mergeMap(token => {
        const tokenReq = request.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(tokenReq);
      }),
      catchError(err => this.handleDefaultError(err))
    );
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
