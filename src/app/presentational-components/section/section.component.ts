import { Component, OnInit } from '@angular/core';

import { MenuItem } from "../../models/menu-item.model";
import { SectionsDataService } from '../../services/sections-data/sections-data.service';

@Component({
  selector: 'laminarte-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  protected key: string;
  public menuItem: MenuItem;

  constructor(protected sectionsDataService: SectionsDataService) { }

  protected setMenuItemFromKey() {
    this.menuItem = this.sectionsDataService.getMenuItemByKey(this.key);
  }

  ngOnInit() {
    this.setMenuItemFromKey();
  }

}
