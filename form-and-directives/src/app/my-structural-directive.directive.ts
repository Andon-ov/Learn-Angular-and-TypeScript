// Import necessary components from the Angular core
import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

// Define the directive with its selector and exportAs value
@Directive({
  selector: '[appMyStructuralDirective]',
  exportAs: 'appMyStructuralDirective',
})
export class MyStructuralDirectiveDirective implements OnChanges {
  // Input property that receives a boolean value
  @Input() appMyStructuralDirective: boolean = false;

  // Constructor to inject the TemplateRef and ViewContainerRef
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  // Lifecycle hook called when input properties change
  ngOnChanges(changes: SimpleChanges): void {
    // Check if appMyStructuralDirective is true
    if (this.appMyStructuralDirective) {
      // Create an embedded view with the provided template and context
      this.vcRef.createEmbeddedView(this.templateRef, {
        value: 'Value from NgOnChanges 123',
        $implicit: 'This is implicit data',
      });
    } else {
      // If appMyStructuralDirective is false, clear the view container
      this.vcRef.clear();
    }
  }
}
