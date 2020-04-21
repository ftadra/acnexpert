import { Component, OnInit } from '@angular/core';
import Auth0Lock from 'auth0-lock';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // Initializing our Auth0Lock
  private lock = new Auth0Lock('e6ueeRhjikVSAB8KjArehWzEfYzBmeUY', 'acnexpert.auth0.com', {
    container: 'lock-form',
    allowLogin: false,
    loginAfterSignUp: true,
    allowShowPassword: true,
    mustAcceptTerms: true,
    languageDictionary: {
      signUpTerms: `I have read and accepted the <a href='${environment.termsUrl}' target='_blank'>Terms and Conditions</a>`
    },
    theme: {
      primaryColor: '#1da499'
    },
    auth: {
      redirectUrl: `${window.location.origin}/${environment.auth.redirect}`,
      audience: environment.auth.audience,
      responseType: 'token id_token',
      params: {
        scope: 'openid email profile'
      }
    }
  });

  constructor() { }

  ngOnInit() {
    this.lock.show();
  }

}
