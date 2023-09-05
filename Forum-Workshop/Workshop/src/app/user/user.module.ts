import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ProfileComponent, RegisterComponent, LoginComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule, SharedModule, ReactiveFormsModule],
})
export class UserModule {}
