import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo-header',
  templateUrl: './add-todo-header.component.html',
  styleUrls: ['./add-todo-header.component.css'],
})
export class AddTodoHeaderComponent {
  addTodo(todoInput: HTMLInputElement) {
    console.log(todoInput.value);
    todoInput.value = '';
  }
}
