import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  isShown: boolean = true;

  toggle() {
    this.isShown = !this.isShown;
  }
}
