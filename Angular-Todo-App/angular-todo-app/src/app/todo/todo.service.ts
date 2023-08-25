import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FullTodo, Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl = 'http://localhost:8000/api/todos/';

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
  getAllTodo$(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  getTodo$(id: string): Observable<FullTodo> {
    return this.httpClient.get<FullTodo>(`${this.apiUrl}${id}/`);
  }

  createTodo(newTodo: FullTodo): Observable<FullTodo> {
    return this.httpClient.post<FullTodo>(this.apiUrl, newTodo);
  }
  updateTodo(id: string, updatedTodo: FullTodo): Observable<FullTodo> {
    return this.httpClient.put<FullTodo>(`${this.apiUrl}${id}/`, updatedTodo);
  }

  deleteTodo(id: string): Observable<any> {
    return this.httpClient.delete<FullTodo>(`${this.apiUrl}delete/${id}/`);
  }
}
