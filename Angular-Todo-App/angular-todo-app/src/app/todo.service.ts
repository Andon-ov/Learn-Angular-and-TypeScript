import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FullTodo, Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  // Promise -------------------------------------------------------------
  // async getTodos() {
  //   const data = await fetch('http://localhost:8000/api/todos/');

  //   return data.json();
  // }

  // async getTodo(id: string) {
  //   const data = await fetch(`http://localhost:8000/api/todos/${id}/`);

  //   return data.json();
  // }

  // Observable ------------------------------------------------------------
  getTodos$(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:8000/api/todos/');
  }

  getTodo$(id: string): Observable<FullTodo> {
    return this.httpClient.get<FullTodo>(
      `http://localhost:8000/api/todos/${id}/`
    );
  }
}
