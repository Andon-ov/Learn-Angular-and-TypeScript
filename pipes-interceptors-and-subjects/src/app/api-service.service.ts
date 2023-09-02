import { Injectable, OnInit } from '@angular/core';
import { API_URL } from './constants';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  async getUsers() {
    return await fetch(`${API_URL}/users`).then((data: any) => data.json());
  }

  loadUsers() {
    return this.http.get<User[]>('/api/users');
  }
}
