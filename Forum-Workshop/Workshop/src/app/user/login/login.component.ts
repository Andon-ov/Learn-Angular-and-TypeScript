import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/theme-and-post/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private apiService: ApiService
  ) {}

  loginFormHandler(form: NgForm) {
    const value: { email: string; password: string } = form.value;
    console.log('Login form submitted with:', value);

    let response = this.userService.login(value.email, value.password);
    console.log('Login response:', response);

    this.apiService.login(value.email, value.password);
    console.log('Login response:', response);

    if (response) {
      console.log('Login successful');
      this.router.navigate(['/themes']);
    } else {
      console.log('Login failed');
      alert('Email or password don`t match');
      form.reset();
    }
  }

  // loginIn(e: Event, email: string, password: string) {
  //   e.preventDefault();

  //   let response = this.userService.login(email, password);
  //   if (response) {
  //     this.router.navigate(['/home']);
  //   } else {
  //     alert('Email or password don`t match');
  //   }
  // }
}
