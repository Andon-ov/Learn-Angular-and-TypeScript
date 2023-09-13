import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  @Output() completeStateChange: EventEmitter<string> = new EventEmitter();

  handleIsCompleteStateChange(todo: Todo): void {
    // todo.isCompleted = !todo.isCompleted;

    this.completeStateChange.emit();
  }
}
