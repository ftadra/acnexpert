import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isInverted = false;
  public loginURL = `${environment.api}/login/auth0`;

  constructor(
    private router: Router,
    public userService: UserService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isInverted = this.router.isActive('/home', true);
    });
  }

  login() {
    this.userService.login();
  }
}
