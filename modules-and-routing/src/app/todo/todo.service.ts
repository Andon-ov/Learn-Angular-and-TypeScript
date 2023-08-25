import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../types/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  fetchTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/');
  }
}
