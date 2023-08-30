import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // ________________________________________________________________
  //! second way to add login form
  // @ViewChild('loginForm') loginForm: NgForm | undefined;

  // loginFormHandler() {
  //   if (!this.loginForm) return;
  //   const form = this.loginForm;

  // _______________________________________________________________

  loginFormHandler(form: NgForm) {
    const value: { username: string; email: string; password: string } =
      form.value;

    if (form.invalid) {
      return;
    }

    form.reset();

    form.setValue({
      username: '',
      password: '',
    });
  }
}
