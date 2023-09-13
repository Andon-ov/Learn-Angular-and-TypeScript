import { Component } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [
    { title: 'Todo 1', isCompleted: false },
    { title: 'Todo 2', isCompleted: true },
    { title: 'Todo 3', isCompleted: false },
    { title: 'Todo 4', isCompleted: true },
  ];

  makeAllTodoCompleted() {
    for (const todo of this.todos) {
      todo.isCompleted = true;
    }
  }

  handleStateChange(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}
