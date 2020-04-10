import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  public checkLogin(): boolean {
    if (this.userService.getLoggedInUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
