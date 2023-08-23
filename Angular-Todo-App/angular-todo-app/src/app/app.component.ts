import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-todo-app';
  todo: Todo[] = [];

  constructor(private todos: TodoService) {}

  ngOnInit() {
    this.todos.getTodo().then((t) => (this.todo = t));
  }
}
