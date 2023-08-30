import { Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
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
      this.registerPromise(
        value.username,
        value.email,
        value.password,
        value.rePassword,
        value.phoneNumber
      );

      // this.apiService.registerPromise(
      //   value.username,
      //   value.email,
      //   value.password,
      //   value.rePassword,
      //   value.phoneNumber
      // );
      this.userService.register(
        value.username,
        value.email,
        value.phoneNumber,
        value.password
      );
    }

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

  registerPromise = async (
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string
  ) => {
    try {
      return await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          rePassword,
          tel,
        }),
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
