import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // This variable holds the title for the app
  title = 'angular-components';

  // This variable controls the visibility of an element
  isVisible = false;

  // This variable holds the default value for an input field
  nameInputValue = 'Test Test';

  // This array holds user data objects with names and ages
  users = [
    { name: 'Denis', age: 20 },
    { name: 'Peter', age: 21 },
    { name: 'Brat', age: 19 },
  ];

  // Constructor runs when the component is created
  constructor() {
    // After 4 seconds, change the input field's value
    setTimeout(() => {
      this.nameInputValue = 'Best';
    }, 4000);
  }

  // Toggle the visibility of an element
  toggleHandler() {
    this.isVisible = !this.isVisible;
  }

  // Handle button click event for the name input
  nameInputBtnHandler(event: Event) {
    console.log(event);
  }

  // Log the input value to the console
  logInputValue(value: string) {
    console.log('Input value:', value);
  }
}
