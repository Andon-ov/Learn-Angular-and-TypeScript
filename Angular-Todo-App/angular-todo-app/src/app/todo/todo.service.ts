import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, catchError, throwError } from 'rxjs';
import { PostTodo, GetTodo, Todo } from './todo';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  private apiUrl = 'http://localhost:8000/api/todos/';

  todos$: Observable<Todo[]> = this.todosSubject.asObservable();

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
    return this.httpClient.get<Todo[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle errors here, you can log the error or throw it to handle in the component.
        console.error('Error while fetching todos:', error);
        return throwError(error);
      })
    );
  }

  getTodo$(id: string): Observable<GetTodo> {
    return this.httpClient.get<GetTodo>(`${this.apiUrl}${id}/`);
  }

  deleteTodo(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}delete/${id}/`).pipe(
      tap(() => {
        this.todosSubject.next(
          this.todosSubject.value.filter((todo) => todo.id !== Number(id))
        );
      })
    );
  }

  sendPostRequest(todo: PostTodo) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.httpClient.post(this.apiUrl, todo, { headers }).subscribe(
      (response) => {
        console.log('Successfully POST request', response);
      },
      (error) => {
        console.error('Error POST request', error);
      }
    );
  }
}
