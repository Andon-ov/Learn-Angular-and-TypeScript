import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = []; // Initialize as an empty array
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // Observable
    this.todoService.getAllTodo$().subscribe(
      (todos: Todo[]) => {
        // Assign the fetched todos to the component property
        this.todos = todos;
        console.log('Fetched todos:', todos);
      },
      (error) => {
        // Handle errors here if needed
        console.error('Error fetching todos:', error);
      }
    );
  }
}
