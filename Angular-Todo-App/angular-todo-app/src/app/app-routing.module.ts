import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AddTodoHeaderComponent } from './todo/add-todo-header/add-todo-header.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'add', component: AddTodoHeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
