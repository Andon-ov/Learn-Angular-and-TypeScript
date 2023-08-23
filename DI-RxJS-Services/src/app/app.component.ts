import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/user';

@Component({
  selector: 'app-root', // Selector for the component
  templateUrl: './app.component.html', // Template file for the component's view
  styleUrls: ['./app.component.css'], // Stylesheet for the component's view
})
export class AppComponent implements OnInit {
  title = 'DI-RxJS-Services'; // Title property for the component
  appUsers: User[] = [];
  isLoading = true;

  constructor(public userService: UserService) {
    // Constructor of the component
    // "userService" is injected as a dependency
    // It can be used to access methods and properties of the UserService
  }
  ngOnInit(): void {
    // when use Promise
    // this.userService.getUsers().then((users) => (this.appUsers = users));

    // when use HttpClient
    this.userService.getUsers().subscribe((users) => (this.appUsers = users));

    this.isLoading = false;
  }

  // Function to handle adding a user from input fields
  //   addUser(nameInput: HTMLInputElement, ageInput: HTMLInputElement) {
  //     const user: User = {
  //       name: nameInput.value,
  //       age: Number(ageInput.value),
  //     };

  //     // Uncomment this line to add the user in "ChangeDetectionStrategy OnPush"
  //     // This approach changes the reference of the array, triggering change detection
  //     // this.users.push(user);

  //     // Use this approach to add the user in "ChangeDetectionStrategy OnPush"
  //     // This approach creates a new array with the updated user list, triggering change detection
  //     this.appUsers = [...this.appUsers, user];

  //     // Clear input fields
  //     nameInput.value = '';
  //     ageInput.value = '';
  //   }
}
