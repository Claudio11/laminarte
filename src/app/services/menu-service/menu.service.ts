import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class MenuService {

  protected _open: boolean;
  protected open: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public open$: Observable<boolean> = this.open.asObservable();

  constructor() { }

  /**
   * Toggles open attribute.
   */
  toggleVisibility() {
    this._open = !this._open;
    this.open.next(this._open);
  }

}
