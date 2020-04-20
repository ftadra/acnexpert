import { Component, OnInit } from '@angular/core';
import Auth0Lock from 'auth0-lock';
import { TranslateService } from '@ngx-translate/core';
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
      redirectUrl: 'http://localhost:4200/account',    // If not specified, defaults to the current page
      responseType: 'token id_token',
      params: {
        scope: 'openid email profile'                // Learn about scopes: https://auth0.com/docs/scopes
      }
    }
  });

  constructor() { }

  ngOnInit() {
    this.lock.show();
  }

}
