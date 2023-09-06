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

  profileDetails: Profile = {
    username: '',
    email: '',
    tel: '',
  };

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
    return this.userService.user;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = { ...this.form.value } as Profile;
    const { username, email, tel } = this.profileDetails;
    this.userService.updateProfile(username!, email!, tel!).subscribe(() => {
      this.toggleEditMode();
    });
  }

  ngOnInit() {
    const { username, email, tel } = this.userService.user!;
    this.profileDetails = {
      username,
      email,
      tel,
    };

    this.form.setValue({ username, email, tel });
  }
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
}
