import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css'],
})
export class ExampleOneComponent implements OnInit, OnChanges, OnDestroy {
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
    // Constructor runs when the component is created

    console.log('Constructor executed');

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

  // Input property with default value
  @Input() inputValue = 'Write here!';

  // Output property to emit events
  @Output() btnClick = new EventEmitter();

  // Handle input field keyup event
  inputKeyupHandler(event: KeyboardEvent) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  // Handle button click event
  btnClickHandler(event: Event) {
    console.log(`${event} clicked`);
    this.btnClick.emit('send messages');
  }

  // ngOnInit lifecycle hook
  ngOnInit(): void {
    console.log('Component created');
  }

  // ngOnDestroy lifecycle hook
  ngOnDestroy(): void {
    console.log('Component destroyed');
  }

  // ngOnChanges lifecycle hook
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
