import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }
  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }
  login(email: string, password: string): boolean {
    if (this.user && this.user.email === email && this.user.password === password) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
  register(username: string, email: string, phoneNumber: string, password: string) {
    this.user = {
      username: username,
      email: email,
      phonNumber: phoneNumber,
      password: password,
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  update(username: string, email: string, phoneNumber: string) {
    const lsUser = localStorage.getItem(this.USER_KEY) || '';
    this.user = JSON.parse(lsUser);
    const password = this.user?.password;

    if (password) {
      this.user = {
        username: username,
        email: email,
        phonNumber: phoneNumber,
        password: password,
      };
      localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    }
  }
}
