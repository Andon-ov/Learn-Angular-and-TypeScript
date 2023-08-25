import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SpinnerComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'todo-list', component: TodoListComponent },
  // { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
