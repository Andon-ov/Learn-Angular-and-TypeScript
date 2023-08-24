import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  async getTodos() {
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await fetch('http://localhost:8000/api/todos/');

    return data.json();
  }

  async getTodo(id: string) {
    const data = await fetch(`http://localhost:8000/api/todos/${id}/`);

    return data.json();
  }
}
