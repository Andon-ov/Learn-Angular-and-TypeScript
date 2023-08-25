import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Injectable({ providedIn: 'root' })
export class TodoItemResolver implements Resolve<Todo> {
  todo = {};

  constructor(private todoService: TodoService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Todo | Observable<Todo> | Promise<Todo> {
    return this.todoService.getTodo$(route.params['id']);
  }
}
