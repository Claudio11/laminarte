import { Component, OnInit, Input } from '@angular/core';

import { Previewable } from '../../interfaces/previewable.interface';

@Component({
  selector: 'laminarte-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: Previewable;

  constructor() { }

  ngOnInit() {
  }
}
