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
import { AuthService } from '../services/auth-service/auth.service';
import { TranslationService } from '../services/translation/translation.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private maxWaiting: number = 45000;

  constructor(private injector: Injector, public translationService: TranslationService) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // https://github.com/angular/angular/issues/18224
    const authService = this.injector.get(AuthService);
    const translationService = this.injector.get(TranslationService);

    request = request.clone({
      setHeaders: {
        'Accept-Language': translationService.getCurrentLanguage(),
        'Content-Type': 'application/json',
        Authorization: authService.getTokenFromLoggedUser() || ''
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
    const authService = this.injector.get(AuthService);
    const router = this.injector.get(Router);

    if (!this.isAuthRequest(error.url) && error instanceof HttpErrorResponse) {
      //console.log('[HttpErrorResponse]', (<HttpErrorResponse>error).status);

      switch ((error as HttpErrorResponse).status) {
        case 401:
          authService.removeUserLoggedInfoFromCache();
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
    } else {
      return this.handleDefaultError(error);
    }
  }

  public isAuthRequest(currentRequestUrl: string) {
    const result: string[] =
      currentRequestUrl !== null && currentRequestUrl !== undefined
        ? currentRequestUrl.match(/\auth/g)
        : null;
    return result && result[0] === 'auth';
  }

  public handleDefaultError(error: any) {
    // console.log('[handleDefaultError]', error);

    if (
      error === 'ERROR_NO_INTERNET' ||
      error === 'ERR_INTERNET_DISCONNECTED' ||
      error.name === 'TimeoutError'
    ) {
      return observableThrowError({
        error: 'ERROR_NO_INTERNET',
        message: this.translationService.getInstantTranslation('HTTP_ERRORS.NO_INTERNET_CONNECTION')
      });
    } else {
      const messageToUser: any =
        error && error.error && error.error.message
          ? error.error.message
          : this.translationService.getInstantTranslation('HTTP_ERRORS.DEFAULT_MESSAGE');
      const messageToDebug: any =
        error && error.error && error.error.error ? error.error.error : 'ERROR_NOT_DEFINED';

      return observableThrowError({ error: messageToDebug, message: messageToUser });
    }
  }
}
