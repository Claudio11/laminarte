import { Component, OnInit } from '@angular/core';

import { SectionComponent } from '../../../../presentational-components/section/section.component';

@Component({
  selector: 'laminarte-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent extends SectionComponent {

  protected key: string = 'estimado';

}
