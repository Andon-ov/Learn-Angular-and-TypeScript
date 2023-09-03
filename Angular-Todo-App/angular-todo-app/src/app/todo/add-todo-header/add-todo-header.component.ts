import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo-header',
  templateUrl: './add-todo-header.component.html',
  styleUrls: ['./add-todo-header.component.css'],
})
export class AddTodoHeaderComponent {
  constructor(
    private todoService: TodoService,
    private http: HttpClient,
    private router: Router
  ) {}

  postId: string | undefined;

  todoTitle: string = '';

  addTodo(todoInput: HTMLInputElement) {
    console.log(this.todoTitle);
    this.todoTitle = ''; // Clear the input field via two-way data binding
  }

  todoFormHandler(form: NgForm) {
    const value: { title: string; description: string } = form.value;

    this.todoService.sendPostRequest(value);

    form.reset(); // Reset the form after submission
    this.router.navigate(['/']);
  }
}
