import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-todo-app';
  todo: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // Promise
    // this.todos.getTodos().then((t) => (this.todo = t));

    // Observable
    this.todoService.getAllTodo$().subscribe((t) => (this.todo = t));
  }
}
