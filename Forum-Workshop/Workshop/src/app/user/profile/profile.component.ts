import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { appEmailDomains } from 'src/app/shared/constants';

interface Profile {
  username: string;
  email: string;
  tel: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;

  profileDetails: Profile | undefined;
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [appEmailValidator(appEmailDomains)]],
    tel: [''],
  });

  constructor(
    public userService: UserService,
    private fb: FormBuilder,
  ) {}

  get user() {
    console.log(this.userService.user);

    return this.userService.user;
  }
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = { ...this.form.value } as Profile;
    console.log(this.profileDetails);
    const { username, email, tel } = this.form.value;
    if (username && email && tel) {
      this.userService.updateProfile(username, email, tel);
    }
    this.toggleEditMode();
  }

  ngOnInit() {
    if (this.user) {
      this.form.get('username')?.setValue(this.user?.username);
      this.form.get('email')?.setValue(this.user?.email);
      this.form.get('tel')?.setValue(this.user?.tel);
    }
  }
}
