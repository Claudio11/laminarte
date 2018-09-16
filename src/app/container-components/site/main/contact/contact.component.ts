import { Component, OnInit } from '@angular/core';

import { SectionComponent } from '../../../../presentational-components/section/section.component';

@Component({
  selector: 'laminarte-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends SectionComponent {

  protected key: string = 'contacto';

}
