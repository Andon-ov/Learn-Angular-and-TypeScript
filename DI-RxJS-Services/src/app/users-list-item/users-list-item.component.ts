import { Component, Input } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.css'],
})
export class UsersListItemComponent {
  @Input() user: User | undefined = undefined;
  // Input property that receives a User object from the parent component
  // The Input decorator allows this property to be bound from outside
  // "undefined" is the default value if the input is not provided

  // You might consider using a default User object here instead of "undefined"
  // if it makes sense for your application's logic.
}
