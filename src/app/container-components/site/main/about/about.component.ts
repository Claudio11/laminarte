import { Component, OnInit } from '@angular/core';
import { AttributeItem } from '../../../../models/attribute-item.model';

@Component({
  selector: 'laminarte-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private items: AttributeItem[] = [ // TODO: Retrieve from db?
    new AttributeItem('NOSOTROS', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elit ante, tempor sit amet neque sed, dictum consequat enim. Pellentesque luctus nunc nisi, sed facilisis mi facilisis vitae. Maecenas vehicula rutrum leo ut consequat. Sed feugiat lacinia ex a lobortis. Vivamus sagittis lacinia mauris, vel facilisis sapien vulputate nec.'),
    new AttributeItem('MISION', 'Sed gravida libero finibus faucibus ultricies. Aenean tellus urna, dictum ac libero eu, feugiat rhoncus ligula. Morbi ut justo eget nibh auctor vestibulum non sed nulla. Aliquam erat volutpat. Cras justo ex, sodales nec risus nec, pretium facilisis lectus. In scelerisque justo et facilisis dictum. Aenean porttitor mi eget eros eleifend, et lobortis sapien suscipit. Vestibulum consectetur cursus orci, sit amet vehicula neque convallis quis. In nec tincidunt lectus, at varius lectus. Nunc aliquet rhoncus lorem vitae elementum.'),
    new AttributeItem('VISION', 'Morbi auctor imperdiet odio maximus aliquam. Quisque ac porta arcu, ut pellentesque leo. Ut ut congue purus. Ut porttitor augue quis mauris vehicula, gravida tempor augue maximus. Mauris vitae mauris nunc. Ut id orci a magna fringilla fringilla vel eu felis. Morbi ipsum nisl, pellentesque vel fermentum quis, dictum at mi. ')
  ]

  constructor() { }

  ngOnInit() {
  }

}
