import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../services/user.service';

@Injectable({ providedIn: 'root' })
export class FlowGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const pieces = state.url.split('/');
    return this.checkStep(pieces.pop());
  }

  public checkStep(step: string): boolean {
    this.userService.calculateStep();

    if (this.userService.isCurrentStep(step)) {
      return true;
    } else {
      this.router.navigate(['/account/' + this.userService.getCurrentStep()]);
      return false;
    }
  }
}
