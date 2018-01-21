import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { MenuPosition } from '../../enums/menu-position.enum';

@Component({
  selector: 'laminarte-menu-opener',
  templateUrl: './menu-opener.component.html',
  styleUrls: ['./menu-opener.component.scss']
})
export class MenuOpenerComponent implements OnInit {

  @Input() open: boolean = false;
  @Input() position: MenuPosition = MenuPosition.RIGHT;

  @HostBinding('class.open') isOpen() {
    console.log('this.open', this.open);

    return this.open; // Doesn't work bound to an input, put it in a child element.
  };

  constructor() { }

  ngOnInit() {
  }

}
