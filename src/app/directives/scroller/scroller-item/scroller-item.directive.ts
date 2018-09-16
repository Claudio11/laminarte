import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[laminarteScrollerItem]'
})
export class ScrollerItemDirective {

  constructor(private elem: ElementRef) { }

  getOffsetTop() {
    return this.elem.nativeElement.offsetTop;
  }

  getHeight() {
    return this.elem.nativeElement.offsetHeight;
  }

  getNativeElement() {
    return this.elem.nativeElement;
  }

}
