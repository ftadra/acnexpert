// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://18.204.203.116:80',
  termsUrl: 'terms.pdf',
  auth: {
    clientID: 'e6ueeRhjikVSAB8KjArehWzEfYzBmeUY',
    domain: 'acnexpert.auth0.com',
    redirect: 'callback',
    audience: 'https://acnexpert.auth0.com/api/v2/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
