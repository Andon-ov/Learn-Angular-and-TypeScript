import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [ProfileComponent, RegisterComponent, LoginComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [ProfileComponent, RegisterComponent, LoginComponent],
})
export class UserModule {}
