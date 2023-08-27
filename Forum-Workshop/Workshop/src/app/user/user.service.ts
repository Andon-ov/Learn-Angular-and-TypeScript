import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { first } from 'rxjs';

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
  login(): void {
    this.user = {
      email: 'Ivan@yahoo.com',
      firstName: 'Ivan',
      password: 'mySecretPass',
      phonNumber: '+359888987654',
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
