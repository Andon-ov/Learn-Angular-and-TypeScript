import { Injectable } from '@angular/core';
import { API_URL } from './constants';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  // BehaviorSubject to store and emit user data
  private userSubj$$ = new BehaviorSubject<Object | null>(null);

  // Observable for external components to subscribe to user data changes
  userObs$ = this.userSubj$$.asObservable();

  constructor(private http: HttpClient) {}

  // Fetch users from the API using the Fetch API
  async getUsers() {
    return await fetch(`${API_URL}/users`).then((data: any) => data.json());
  }

  // Load users using HttpClient and notify subscribers with null value first
  loadUsers() {
    this.userSubj$$.next(null);
    return this.http.get<User[]>('/api/users');
  }

  // Load users using HttpClient and update the BehaviorSubject with the received data
  loadUsersFromSubj(): void {
    this.userSubj$$.next(null);
    this.http.get<User[]>('/api/users').subscribe({
      next: (users) => this.userSubj$$.next(users),
    });
  }
}
