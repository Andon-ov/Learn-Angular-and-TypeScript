import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  isAuthenticate = true;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: () => {
        this.isAuthenticate = false;
      },
      error: () => {
        this.isAuthenticate = false;
      },
      complete: () => {
        this.isAuthenticate = false;
      },
    });
  }
}
