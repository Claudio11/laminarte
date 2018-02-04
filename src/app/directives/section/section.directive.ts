import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[laminarteSection]'
})
export class SectionDirective {

  @Output() onPreviousSection = new EventEmitter();
  @Output() onNextSection = new EventEmitter();

  constructor() { }

}
