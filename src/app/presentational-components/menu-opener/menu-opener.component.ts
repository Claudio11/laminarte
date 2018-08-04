import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';

import { MenuPosition } from '../../enums/menu-position.enum';

@Component({
  selector: 'laminarte-menu-opener',
  templateUrl: './menu-opener.component.html',
  animations: [
    trigger('menuOpened', [
      state('true', style({
        right: '0'
      })),
      state('false', style({
        right: '-100%'
      })),
      transition('* => *', animate('0.5s')),
      //transition(':enter', animate(0)) // TODO: Prevent animation on start.
    ]),
  ],
  styleUrls: ['./menu-opener.component.scss']
})
export class MenuOpenerComponent implements OnInit {

  @Input() open: boolean = false;
  @Input() position: MenuPosition = MenuPosition.RIGHT;

  @Output() toggleVisibility = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
