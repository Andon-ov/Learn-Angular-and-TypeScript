import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  async getTodo() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/');
    return data.json();
  }
}
