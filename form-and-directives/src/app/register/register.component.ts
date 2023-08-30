import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [
      '',
      [Validators.required, Validators.minLength(5)],
      Validators.email,
    ],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rePassword: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  handleSubmit() {}
}
