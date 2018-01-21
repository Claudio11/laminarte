import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu-service/menu.service';

@Component({
  selector: 'laminarte-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
