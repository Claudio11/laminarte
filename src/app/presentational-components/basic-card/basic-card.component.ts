import { Component, OnInit, Input } from '@angular/core';
import { Previewable } from '../../interfaces/previewable.interface';

/**
 * Just a card with title and description.
 */
@Component({
  selector: 'laminarte-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {

  @Input() item: Previewable;

  constructor() { }

  ngOnInit() {
  }

}
