/*
  In Angular, there are two main change detection strategies: Default and OnPush.

  Default (ChangeDetectionStrategy.Default): In this strategy, Angular checks for changes in the component's properties and methods
    during every change detection cycle. This can potentially lead to a lot of unnecessary checks and updates.

  OnPush (ChangeDetectionStrategy.OnPush): In this strategy, Angular only performs change detection when there's a change
    in the input properties (inputs) of the component or when an event is triggered within the component.
    This means that if the input properties are not modified, the component won't undergo change detection, 
    leading to better performance.
  */

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ChangeDetectorRef,
  OnChanges,
} from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-users-list', // Selector for the component
  templateUrl: './users-list.component.html', // Template file for the component's view
  styleUrls: ['./users-list.component.css'], // Stylesheet for the component's view

  // After we add next row we activate "ChangeDetectionStrategy OnPush"
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnChanges {
  // Input property to receive the list of users from the parent component
  @Input() users: User[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges() {
    console.log('Invoked from ngOnChanges');
    // This method is triggered when any @Input property (such as "users") changes.
    // In this case, it will be called whenever the parent component updates the "users" input.
  }

  // Method to manually trigger change detection
  refresh() {
    this.cd.detectChanges();
    // This method manually triggers change detection for this component.
    // Use this carefully, as it might affect performance if overused.
  }
}
