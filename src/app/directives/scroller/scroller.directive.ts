import { Directive, AfterContentInit, ContentChildren, QueryList, HostListener, ElementRef } from '@angular/core';
import { BehaviorSubject, timer } from "rxjs";
import { debounceTime, tap } from 'rxjs/operators';

import { ScrollerItemDirective } from './scroller-item/scroller-item.directive';
import { AnimationService } from '../../services/animation-service/animation.service';

interface ScrollMetadata {
  incomingSection: ScrollerItemDirective;
  scrollingDown: boolean;
}

@Directive({
  selector: '[laminarteScroller]'
})
export class ScrollerDirective {

  protected lastViewportOffset: number = window.pageYOffset;
  protected sections: ScrollerItemDirective[] = [];
  protected currentSectionIndex: number = 0;
  protected scrollAvailable: boolean = true;
  protected scrollingDown: boolean = true;

  protected switchSection$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  protected elementScroll$: BehaviorSubject<Event> = new BehaviorSubject<any>(undefined); // Imperative so it's able to unsubscribe.

  @ContentChildren(ScrollerItemDirective) sectionsQueryList: QueryList<ScrollerItemDirective>;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.elementScroll$.next(event);
  }

  constructor(
    protected element: ElementRef,
    protected animationService: AnimationService
  ) { }

  ngAfterContentInit() {
    this.sections = this.sectionsQueryList.toArray();

    this.switchSection$
      .subscribe(scrollMetadata => {
        if (scrollMetadata) {
          this.scrollToSection(scrollMetadata);
        }
      });

    this.animationService.animationEnded().subscribe(() => {
      this.setIncomingSectionAsCurrent(this.scrollingDown);
      this.scrollAvailable = true;
    });

    this.elementScroll$.subscribe(event => this.onElementScroll(event));
  }

  /**
   * Scrolls to the section in given scroll metadata.
   *
   * @param scrollMetadata Scroll metadata.
   */
  scrollToSection(scrollMetadata) { // TODO: Add type of scrollMetadata.
    if (scrollMetadata.incomingSection) {
      this.animationService.animateScroll(
        scrollMetadata.incomingSection.getOffsetTop(),
        window.scrollY,
        2000,
        window,
        false
      );

      this.scrollAvailable = false;
    }
  }

  /**
   * Returns true if the user is scrolling down, false otherwise.
   */
  private isScrollingDown(window: Window) {
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
   * Scrolls to a section, depending if the user is scrolling out of a section.
   *
   * @param Current window.
   * @param scrollingDown True if the user is scrolling down, false otherwise.
   */
  private goToCorrectSection(window: Window, scrollingDown: boolean) {
    if (this.sections && this.sections[this.currentSectionIndex]) {
      const incomingSection: ScrollerItemDirective = this.getIncomingSection(scrollingDown);

      if (this.conditionsMetToSwitchSection(incomingSection, scrollingDown)) {
        if (this.scrollAvailable) {
          const scrollMetadata: ScrollMetadata = { incomingSection, scrollingDown }
          this.switchSection$.next(scrollMetadata);
          this.scrollAvailable = false;
        }
      }
    }
  }

  private onElementScroll(event: Event) {
    this.scrollingDown = this.isScrollingDown(window);
    this.goToCorrectSection(window, this.scrollingDown);
    this.lastViewportOffset = window.pageYOffset;
  }
}
