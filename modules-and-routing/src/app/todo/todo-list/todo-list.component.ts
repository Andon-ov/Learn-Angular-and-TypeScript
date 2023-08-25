import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/types/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.fetchTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
    });
  }
}
