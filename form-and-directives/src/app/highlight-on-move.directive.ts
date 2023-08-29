// Import necessary components from the Angular core
import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

// Define the directive with its selector
@Directive({
  selector: '[appHighlightOnMove]',
})
export class HighlightOnMoveDirective implements OnInit, OnDestroy {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // HostListener for the 'mouseover' event
  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
    console.log('mouseOverHandler ');
    console.log(e);
    console.log(`-------------------------------`);
  }

  // An array to hold functions for event unsubscription
  unsubscribeFromEvents: (() => void)[] = [];

  ngOnInit(): void {
    // Event listeners for 'mouseenter' and 'mouseleave' events
    this.unsubscribeFromEvents.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseenter',
        this.mouseEnterHandler.bind(this)
      )
    );

    this.unsubscribeFromEvents.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseleave',
        this.mouseLeaveHandler.bind(this)
      )
    );
  }

  // Event handler for 'mouseenter'
  mouseEnterHandler(e: MouseEvent): void {
    // Add a CSS class to highlight the element
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');

    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'Pink'
    // );
  }

  // Event handler for 'mouseleave'
  mouseLeaveHandler(e: MouseEvent): void {
    // Remove the CSS class to remove the highlight
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');

    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
  }

  ngOnDestroy(): void {
    // Unsubscribe from added event listeners when the directive is destroyed
    this.unsubscribeFromEvents.forEach((fn) => fn());
  }
}
