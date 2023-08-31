import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get firstName(): string {
    return this.userService.user?.username || '';
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}
