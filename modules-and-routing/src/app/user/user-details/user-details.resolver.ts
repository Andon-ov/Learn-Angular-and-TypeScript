import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/types/user';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsResolver implements Resolve<User> {
  user = {};
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    return this.userService.fetchUser(route.params['id']);
  }
}
