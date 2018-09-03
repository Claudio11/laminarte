import { Component, Input } from '@angular/core';
import { MenuItem } from "../../../../models/menu-item.model";
import { AttributeItem } from '../../../../models/attribute-item.model';
import { SectionComponent } from '../../../../presentational-components/section/section.component';
import { SectionsDataService } from '../../../../services/sections-data/sections-data.service';

@Component({
  selector: 'laminarte-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  private menuItem: MenuItem;

  public items: AttributeItem[] = [ // TODO: Retrieve from db?
    new AttributeItem('NOSOTROS', 'Somos una empresa joven en el mercado dedicado al diseño y realización de cuadros decorativos, productos personalizados, decoración para fiestas y eventos y cartelería. Además hacemos diseño gráfico y web. Manejamos diseños exclusivos y originales. Conocenos!'),
    new AttributeItem('MISION', 'Nos hemos propuesto llegar a  todo tipo de espacios y productos para decorarlos y diseñarlos de forma novedosa, práctica, creativa, funcional,  muy personal, y sobre todo basándonos en las últimas tendencias en diseño y decoración. Es por eso que nuestro objetivo principal es  estimular  el interés por la decoración para el hogar y para cualquier tipo de evento, además de plasmar las ideas de nuestros clientes, en los productos que ofrecemos, y sobretodo dar un servicio 100% personalizado, que se adapte a su necesidad.'),
    new AttributeItem('VISION', 'Ser la empresa líder en el mercado, ofreciendo una amplia gama de posibilidades para nuestros clientes. Asi mismo, promover el interés por adquirir nuestros servicios y productos, mediante una atención personalizada cálida y eficiente. Seguir creciendo día a día, desde el respeto, y la valoración hacia nuestros clientes.')
  ]

  constructor(private sectionsDataService: SectionsDataService) {
    this.menuItem = sectionsDataService.getMenuItemByKey('nosotros'); // TODO: Put key in constants.
  }

}
