import { Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/types/user';
import { ApiService } from 'src/app/theme-and-post/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // !second way to get a form
  // @ViewChild('registerForm') registerForm: NgForm | undefined;
  // And remove form name from event handler

  constructor(
    private userService: UserService,
    private router: Router,
    private apiService: ApiService
  ) {}

  // !second way to get a form
  // registerFormHandler() {
  //   if (!this.registerForm) return;
  //   const form = this.registerForm;

  registerFormHandler(form: NgForm) {
    const value: {
      username: string;
      email: string;
      phoneNumber: string;
      password: string;
      rePassword: string;
    } = form.value;

    if (form.invalid) {
      return;
    }
    if (value.password !== value.rePassword) {
      alert('Password and repeat Password are not the same');
      form.controls['password'].setValue('');
      form.controls['rePassword'].setValue('');
      return;
    } else {
      this.router.navigate(['/login']);
      this.apiService.register(
        value.username,
        value.email,
        value.password,
        value.rePassword,
        value.phoneNumber
      );
      this.userService.register(
        value.username,
        value.email,
        value.phoneNumber,
        value.password
      );
    }
    console.log(form.value);

    form.reset();
  }

  // formRegisterHandler(
  //   event: Event,
  //   username: string,
  //   email: string,
  //   phoneNumber: string,
  //   password: string,
  //   rePassword: string
  // ) {
  //   event.preventDefault();
  //   if (password !== rePassword) {
  //     alert('Password and repeat Password is not same');
  //     password = '';
  //     rePassword = '';
  //   } else {
  //     this.router.navigate(['/login']);
  //     this.userService.register(username, email, phoneNumber, password);
  //   }
  // }
}
