import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoHeaderComponent } from './add-todo-header/add-todo-header.component';

import { RouterModule } from '@angular/router';
import { TodoItemResolver } from './todo-item/todo-item.resolver';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoItemComponent, TodoListComponent, AddTodoHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'details/:id',
        component: TodoItemComponent,
        resolve: { todo: TodoItemResolver },
      },
    ]),
  ],
  exports: [TodoListComponent, TodoItemComponent, AddTodoHeaderComponent],
})
export class TodoModule {}
