import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import Auth0Lock from 'auth0-lock';
import { User } from '../interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiStatusService } from '../api/status.service';
import { finalize, tap, catchError, map } from 'rxjs/operators';
import { SignupStatus } from '../interfaces/signup-status.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  public user$: BehaviorSubject<User> = new BehaviorSubject(null);

  private auth0Options = {
    theme: {
      logo: '/assets/images/logo.png',
      primaryColor: '#1da499'
    },
    auth: {
      redirectUrl: `${window.location.origin}/${environment.auth.redirect}`,
      audience: environment.auth.audience,
      responseType: 'token id_token',
      params: {
        scope: 'openid email profile'
      }
    },
    languageDictionary: {
      title: ''
    },
    closable: true,
    allowShowPassword: true,
    allowSignUp: false,
    autoClose: true
  };

  private lock;

  private currentStep = 0;
  private availableSteps = {
    0: 'signup',
    1: 'create',
    2: 'clinical',
    3: 'billing',
    4: 'photos',
    5: 'thanks',
    6: 'dashboard',
    7: 'complete'
  };

  constructor(
    private router: Router,
    private statusService: ApiStatusService) {
    setTimeout(() => {
      this.lock = new Auth0Lock(
        environment.auth.clientID,
        environment.auth.domain,
        this.auth0Options
      );

      this.lock.on('authenticated', (authResult: any) => {
        this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            throw new Error(error);
          }

          localStorage.setItem('token', authResult.idToken);
          localStorage.setItem('profile', JSON.stringify(profile));

          this.setUser(profile);
          this.router.navigate(['/account']);
        });
      });

      this.lock.on('authorization_error', error => {
        console.log('something went wrong', error);
      });

      this.loadUser();
    }, 1000);
  }

  // STEP LOGIC
  public isCurrentStep(step: string): boolean {
    return step === this.availableSteps[this.currentStep];
  }

  public getCurrentStep(): string {
    return this.availableSteps[this.currentStep];
  }

  public setCurrentStep(step: string) {
    const keys = Object.keys(this.availableSteps);
    let stepIndex = -1;
    for (let i = 0; i < keys.length; i++) {
      if (this.availableSteps[i] === step) {
        stepIndex = i;
      }
    }

    if (stepIndex > -1) {
      this.currentStep = stepIndex;
    }
  }

  public calculateStep(): Observable<string> {
    let step = 'signup';

    return this.statusService.getStatus()
      .pipe(
        map(response => {
          step = response.status;
          return status;
        }),
        finalize(() => {
          this.setCurrentStep(step);
        })
      );
  }

  // LOGIN AND LOGOUT
  public login() {
    this.lock.show();
  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
  }

  public isAuthenticated() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');

    return !helper.isTokenExpired(token);
  }

  public getAuthToken() {
    return localStorage.getItem('token') || null;
  }

  private loadUser() {
    if (!this.isAuthenticated()) {
      localStorage.removeItem('profile');
      localStorage.removeItem('token');
    }

    const userJson = localStorage.getItem('profile');
    if (userJson) {
      const parsedUser = JSON.parse(userJson);
      this.setUser(parsedUser);
    }
  }

  public setUser(profile) {
    const user: User = profile;
    this.user$.next(user);
  }
}
