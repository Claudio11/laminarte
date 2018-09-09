import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'laminarte-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() separator: string; // Image url.
  @Input() titleColor: string = 'white';

  constructor() { }

  ngOnInit() {
  }

}
