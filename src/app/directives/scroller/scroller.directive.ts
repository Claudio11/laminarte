import { Directive, AfterContentInit, ContentChildren, QueryList, HostListener, ElementRef } from '@angular/core';

import { ScrollerItemDirective } from './scroller-item/scroller-item.directive';

@Directive({
  selector: '[laminarteScroller]'
})
export class ScrollerDirective {

  private lastWindowYOffset: number = window.pageYOffset;
  private sections: ScrollerItemDirective[] = [];
  private currentSectionIndex: number = 0;

  @ContentChildren(ScrollerItemDirective) sectionsQueryList: QueryList<ScrollerItemDirective>;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.repositionIfNeeded(window);
    this.lastWindowYOffset = window.pageYOffset;

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
    return window.pageYOffset > this.lastWindowYOffset;
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
   * Returns true if the user is scrolling, and leaving the current section
   * because of that scrolling.
   */
  private scrollToCorrectSection(window: Window) {
    const viewportTopOffsetY: number = window.pageYOffset;
    const viewportHeight: number = window.innerHeight; // TODO: Later change for element height.
    const viewportBottomOffsetY: number = viewportTopOffsetY + viewportHeight;

    // console.log('currentWindowScrollTop', viewportTopOffsetY);
    // console.log('currentViewportHeight', viewportHeight);
    // console.log('bottomScrollPosition', viewportBottomOffsetY);

    // this.sections.forEach((section, i) => {
    //   const sectionBottomY: number = section.getOffsetTop() + section.getHeight();

    //   const viewportBottomIsBelowSectionBottom: boolean =
    //     viewportBottomOffsetY > sectionBottomY

    //   if (viewportBottomIsBelowSectionBottom) {
    //     const sectionHeightLargerThanViewportHeight: boolean =
    //       section.getHeight() > viewportHeight;
    //     const sectionBottomBelowViewportBottom: boolean =
    //       viewportTopOffsetY < sectionBottomY;
    //     // const sectionVisibleInViewport: boolean =
    //     //   viewportBottomIsBelowSectionBottom && sectionBottomBelowViewportBottom;

    //     const needsToScrollPosition: boolean =
    //       sectionHeightLargerThanViewportHeight
    //         ? viewportTopOffsetY < section.getOffsetTop()
    //         : ;


    //     if (needsToScrollPosition) {
    //       window.scrollTo({
    //         top: section.getOffsetTop()
    //       });
    //     }
    //     console.log(section.getOffsetTop());
    //   }

    // });


    if (this.sections && this.sections[this.currentSectionIndex]) {

      // When scrolling down.
      if (this.sections[this.currentSectionIndex + 1]) {
        const nextSection = this.sections[this.currentSectionIndex + 1];

        const nextSectionTopIsAboveViewportBottom: boolean =
          nextSection.getOffsetTop() < viewportBottomOffsetY;

        if (nextSectionTopIsAboveViewportBottom) {
          this.currentSectionIndex = this.currentSectionIndex + 1;
          window.scrollTo({
            top: nextSection.getOffsetTop()
          });
        }
      }
      else {
        // TODO: Reached the end.
      }

    }
  }

  /**
   * Scrolls to the correct section.
   */
  private repositionIfNeeded(window: Window) {
    //if (this.leavingSection(window)) {
    this.scrollToCorrectSection(window)
    //}
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
