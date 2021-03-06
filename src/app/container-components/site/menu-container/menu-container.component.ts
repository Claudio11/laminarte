import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MenuItem } from "../../../models/menu-item.model";

@Component({
  selector: 'laminarte-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent implements OnInit {

  @Input() open: boolean = false;
  @Input() menuItems: MenuItem[];

  @Output() toggleVisibility = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
