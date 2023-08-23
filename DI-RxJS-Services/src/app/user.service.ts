import { Injectable } from '@angular/core';
import { User } from './types/user';
import { OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  // Initial list of users
  // users: User[] = [
  // { name: 'Ivan', age: 21 },
  // { name: 'Peter', age: 22 },
  // { name: 'Dian', age: 23 },
  // { name: 'Denis', age: 24 },
  // { name: 'Anton', age: 25 },
  // ];

  interval: any;
  count = 0;

  // add private http: HttpClient in the constructor - if we want to use it
  constructor(private http: HttpClient) {
    // Add a new user every 3 seconds using setInterval
    // setInterval(() => {
    //   this.users.push({
    //     name: 'DemoName',
    //     age: 55,
    //   });
    //   console.log('User has been added!');
    // }, 3000);

    // interval and count variables are used to demonstrate a simple interval-based logging mechanism in the constructor.
    console.log('constructor: logging starting...');
    this.interval = setInterval(() => {
      console.log(this.count++);
    }, 1000);
  }

  ngOnDestroy() {
    // The ngOnDestroy lifecycle hook is used to clean up resources when the component is destroyed.
    // In this case, the interval for logging is cleared.

    console.log('ngOnDestroy: cleaning up...');
    clearInterval(this.interval);
  }

  // Fetch data from api - we can use Promise or HTTPClient from Angular

  getUsers() {
    // Promise
    // return fetch('https://jsonplaceholder.typicode.com/users/').then(
    //   (response) => response.json()
    // );

    // Observable - when use that we must have decorator to tha service : @Injectable() / @Injectable({providedIn: 'root',})
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/');
  }
}
