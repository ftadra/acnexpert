import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import Auth0Lock from 'auth0-lock';

@Injectable({ providedIn: 'root' })
export class UserService {
  auth0Options = {
    theme: {
      logo: '/assets/images/logo.png',
      primaryColor: '#1da499'
    },
    auth: {
      redirectUrl: environment.auth.redirect,
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
    autoclose: true,
    oidcConformant: true,
  };

  lock = new Auth0Lock(
    environment.auth.clientID,
    environment.auth.domain,
    this.auth0Options
  );

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

  constructor(private router: Router) {
    this.lock.on('authenticated', (authResult: any) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          throw new Error(error);
        }

        localStorage.setItem('token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.router.navigate(['/']);
      });
    });

    this.lock.on('authorization_error', error => {
      console.log('something went wrong', error);
    });
  }

  public isCurrentStep(step: string): boolean {
    return step === this.availableSteps[this.currentStep];
  }

  public getCurrentStep(): string {
    return this.availableSteps[this.currentStep];
  }

  public login() {
    this.lock.show();
  }

  public isAuthenticated() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');

    return !helper.isTokenExpired(token);
  }

  public getAuthToken() {
    return localStorage.getItem('token') || null;
  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
  }
}
