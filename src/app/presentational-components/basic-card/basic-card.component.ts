import { Component, AfterViewInit, Input, ElementRef } from '@angular/core';

import { CardComponent } from '../card/card.component';
/**
 * Just a card with title and description.
 */
@Component({
  selector: 'laminarte-basic-card',
  templateUrl: '../card/card.component.html',
  styleUrls: ['../card/card.component.scss']
})
export class BasicCardComponent extends CardComponent {

  // TODO: Continue, collapse if description is large (more than 1/3?).
  private maxDescriptionHeight: number;

  public descriptionOverflown: boolean = false;

  constructor(protected elem: ElementRef) {
    super();
  }

  ngAfterViewInit() {
    //console.log('containerHeight', this.containerHeight);
    console.log('elem', this.elem.nativeElement.offsetHeight);
  }

}
