import { Directive, AfterContentInit, ContentChildren, QueryList, HostListener, ElementRef } from '@angular/core';

import { ScrollerItemDirective } from './scroller-item/scroller-item.directive';

@Directive({
  selector: '[laminarteScroller]'
})
export class ScrollerDirective {

  private lastViewportOffset: number = window.pageYOffset;
  private sections: ScrollerItemDirective[] = [];
  private currentSectionIndex: number = 0;

  @ContentChildren(ScrollerItemDirective) sectionsQueryList: QueryList<ScrollerItemDirective>;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollToCorrectSection(window, this.scrollingDown(window));
    this.lastViewportOffset = window.pageYOffset;
  }

  constructor(private element: ElementRef) { }

  ngAfterContentInit() {
    this.sections = this.sectionsQueryList.toArray();
  }

  /**
   * Returns true if the user is scrolling down, false otherwise.
   */
  private scrollingDown(window: Window) {
    return window.pageYOffset > this.lastViewportOffset;
  }

  /**
   * Returns the incoming section if the user scrolls in the given direction.
   *
   * @param scrollingDown True if the user is scrolling down, false otherwise.
   */
  private getIncomingSection(scrollingDown: boolean) {
    return scrollingDown ? this.sections[this.currentSectionIndex + 1] : this.sections[this.currentSectionIndex - 1];
  }

  /**
   * Returns the incoming section if the user scrolls in the given direction.
   *
   * @param scrollingDown True if the user is scrolling down, false otherwise.
   */
  private setIncomingSectionAsCurrent(scrollingDown: boolean) {
    scrollingDown ? this.currentSectionIndex++ : this.currentSectionIndex--;
  }

  /**
   * Returns true if the conditions are given in order to switch to a different
   * section, false otherwise.
   *
   * @param incomingSection
   * @param scrollingDown True if the user is scrolling down, false otherwise.
   *
   * @return True if condtions are met in order to switch to a differente section,
   * false otherwise.
   */
  private conditionsMetToSwitchSection(
    incomingSection: ScrollerItemDirective,
    scrollingDown: boolean
  ): boolean {
    const viewportTopOffsetY: number = window.pageYOffset;
    const viewportHeight: number = window.innerHeight; // TODO: Later change for element height.
    const viewportBottomOffsetY: number = viewportTopOffsetY + viewportHeight;
    let conditionsMet: boolean = false;

    if (incomingSection) {
      if (scrollingDown) {
        conditionsMet = incomingSection.getOffsetTop() < viewportBottomOffsetY;
      }
      else {
        const incomingSectionBottom = incomingSection.getOffsetTop() + incomingSection.getHeight();
        conditionsMet = incomingSectionBottom > viewportTopOffsetY;
      }
    }

    return conditionsMet;
  }

  /**
   * Scrolls to a section, depending if the user is srolling out of a section.
   *
   * @param Current window.
   * @param scrollingDown True if the user is scrolling down, false otherwise.
   */
  private scrollToCorrectSection(window: Window, scrollingDown: boolean) {
    if (this.sections && this.sections[this.currentSectionIndex]) {
      const incomingSection: ScrollerItemDirective = this.getIncomingSection(scrollingDown);

      if (this.conditionsMetToSwitchSection(incomingSection, scrollingDown)) {
        window.scrollTo({
          top: incomingSection.getOffsetTop(),
          behavior: 'smooth' // TODO: Create fallback.
        });
        this.setIncomingSectionAsCurrent(scrollingDown);
      }
    }
  }
}
