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
    this.repositionIfNeeded(window);
    this.lastViewportOffset = window.pageYOffset;

    //console.log('scroll event', window.pageYOffset);
    //console.log('current', this.element.nativeElement.scrollTop);
  }

  constructor(private element: ElementRef) { }

  ngAfterContentInit() {
    // contentChildren is set
    console.log('sections', this.sections);
    this.sections = this.sectionsQueryList.toArray();
    console.log('a', this.sections[1])
    // this.sectionsQueryList.changes.subscribe(sections => {
    //   //this.sections = sections
    //   console.log('this.sectionsQueryList.toArray()', this.sectionsQueryList.toArray());
    // });
  }

  /**
   * Returns true if the user is scrolling down, false otherwise.
   */
  private scrollingDown(window: Window) {
    return window.pageYOffset > this.lastViewportOffset;
  }

  /**
   * Returns true if the user is scrolling, and leaving the current section
   * because of that scrolling.
   */
  // private leavingSection(window: Window) {
  //   const scrollingDownAndLeavingSection: boolean =
  //     this.scrollingDown(window) && ...
  //   const scrollingUpAndLeavingSection: boolean =
  //     !this.scrollingDown(window) && ...

  //   return scrollingDownAndLeavingSection || scrollingUpAndLeavingSection;
  // }

  /**
   * Scrolls to a section, depending if the user is srolling out of a section.
   *
   * @param Current window.
   * @param scrollingDown True if the user is scrolling down, false otherwise.
   */
  private scrollToCorrectSection(window: Window, scrollingDown: boolean) {
    const viewportTopOffsetY: number = window.pageYOffset;
    const viewportHeight: number = window.innerHeight; // TODO: Later change for element height.
    const viewportBottomOffsetY: number = viewportTopOffsetY + viewportHeight;

    if (this.sections && this.sections[this.currentSectionIndex]) {

      if (scrollingDown) {

        if (this.sections[this.currentSectionIndex + 1]) {
          const nextSection = this.sections[this.currentSectionIndex + 1];

          const nextSectionTopIsAboveViewportBottom: boolean =
            nextSection.getOffsetTop() < viewportBottomOffsetY;

          if (nextSectionTopIsAboveViewportBottom) {
            this.currentSectionIndex = this.currentSectionIndex + 1;
            window.scrollTo({
              top: nextSection.getOffsetTop(),
              behavior: 'smooth' // TODO: Create fallback.
            });
          }
        }
      }
      else {
        if (this.sections[this.currentSectionIndex - 1]) {
          const previousSection = this.sections[this.currentSectionIndex - 1];
          const previousSectionBottom = previousSection.getOffsetTop() + previousSection.getHeight();

          const previousSectionBottomIsBelowViewportTop: boolean =
            previousSectionBottom > viewportTopOffsetY;

          if (previousSectionBottomIsBelowViewportTop) {
            this.currentSectionIndex = this.currentSectionIndex - 1;
            window.scrollTo({
              top: previousSection.getOffsetTop(),
              behavior: 'smooth' // TODO: Create fallback.
            });
          }
        }
      }

    }
  }

  /**
   * Scrolls to the correct section.
   */
  private repositionIfNeeded(window: Window) {
    this.scrollToCorrectSection(window, this.scrollingDown(window))
  }

  /**
   * Scrolls to the previous section if available.
   */
  private previousSection(window: Window) {

  }

  /**
   * Scrolls to the next section if available.
   */
  private nextSection(window: Window) {

  }

}
