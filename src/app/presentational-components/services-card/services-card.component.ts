import { Component, OnInit } from '@angular/core';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'laminarte-services-card',
  templateUrl: '../card/card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesCardComponent extends CardComponent {

  ngOnInit() {
  }

}
