import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Previewable } from '../../interfaces/previewable.interface';

@Component({
  selector: 'laminarte-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: Previewable;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
}
