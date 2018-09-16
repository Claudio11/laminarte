import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from "rxjs";
import { map, finalize, takeWhile } from "rxjs/operators";

/**
 * Class in charge of handling animations that cannot be handled by Angular 2 or css.
 */
@Injectable()
export class AnimationService {

  protected currentAnimation: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  public currentAnimation$ = this.currentAnimation.asObservable();

  constructor() { }

  /**
   * Scrolls from <startPosition> to <endPosition> in <duration> time in an animated way.
   *
   * @param endPosition Final scroll position.
   * @param startPosition Start scroll position.
   * @param duration Duration of the animation in ms.
   * @param nativeElement Element to change scroll position; nativeElement from an Angular's ElementRef.
   * @param centered True if want to position it in the middle of the viewport, false otherwise;
   */
  animateScroll(
    endPosition: number,
    startPosition: number,
    duration: number,
    nativeElement: any,
    centered: boolean
  ) {
    const intervalTime = 1;
    const halfViewportHeight: number = nativeElement.clientHeight / 2;

    if (centered) {
      endPosition -= halfViewportHeight;
    }
    const totalDistance = endPosition - startPosition;

    let timeSinceStart = 0;
    let tempPosition = startPosition;

    interval(intervalTime).pipe(

      map(() => {
        timeSinceStart += intervalTime;
        let tempOffset = totalDistance * timeSinceStart / duration;
        tempPosition += tempOffset;
        return tempPosition;
      }),

      takeWhile((tempPosition) => {
        let shouldContinue = false;
        if (totalDistance != 0) {
          shouldContinue = (totalDistance > 0) ? tempPosition <= endPosition : tempPosition >= endPosition;
        }
        return shouldContinue;
      }),

      finalize(() => {
        nativeElement.scrollTo ? nativeElement.scrollTo(0, endPosition) : nativeElement.scrollTop = endPosition;
        this.currentAnimation.next(nativeElement)
      })

    ).subscribe(() => {
      nativeElement.scrollTo ? nativeElement.scrollTo(0, tempPosition) : nativeElement.scrollTop = tempPosition;
    });
  }


  animationEnded() {
    return this.currentAnimation$;
  }

}
