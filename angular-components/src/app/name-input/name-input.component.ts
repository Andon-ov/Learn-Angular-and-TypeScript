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
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
})
export class NameInputComponent implements OnInit, OnDestroy, OnChanges {
  // Component title
  title = 'name input component';

  // Input property with default value
  @Input() inputValue = 'Write here!';

  // Output property to emit events
  @Output() btnClick = new EventEmitter();

  // Constructor runs when the component is created
  constructor() {
    console.log('Constructor executed');
  }

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
