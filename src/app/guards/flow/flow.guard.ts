import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../services/user.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlowGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const pieces = state.url.split('/');
    const step = pieces.pop();

    return this.userService.calculateStep()
      .pipe(
        take(1),
        map(() => {
          if (this.userService.isCurrentStep(step)) {
            return true;
          } else {
            this.router.navigate(['/account/' + this.userService.getCurrentStep()]);
            return false;
          }
        }));
  }
}
