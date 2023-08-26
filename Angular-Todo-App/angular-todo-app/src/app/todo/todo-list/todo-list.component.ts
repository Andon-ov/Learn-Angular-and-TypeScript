import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos!: Todo[];
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    // Promise
    // this.todos.getTodos().then((t) => (this.todo = t));

    // Observable
    this.todoService.getAllTodo$().subscribe((t) => (this.todos = t));
  }
}
