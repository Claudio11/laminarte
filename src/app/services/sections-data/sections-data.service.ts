import { Injectable } from '@angular/core';

import { MenuItem } from "../../models/menu-item.model";

@Injectable({
  providedIn: 'root'
})
export class SectionsDataService {

  // Hard coding them for now.
  private _menuItems: MenuItem[];

  /**
   * Getter menuItems
   * @return {MenuItem[]}
   */
  public get menuItems(): MenuItem[] {
    return this._menuItems;
  }

  /**
   * Setter menuItems
   * @param {MenuItem[]} value
   */
  public set menuItems(value: MenuItem[]) {
    this._menuItems = value;
  }

  constructor() {
    this.menuItems = [ // Hardcoding it for now, later make an observable data service for this.
      new MenuItem('inicio', '', '', 'Inicio'),
      new MenuItem('nosotros', 'Acerca de laminarte', 'Te contamos quiénes somos, a qué nos dedicamos y cuáles son nuestros objetivos.', 'Nosotros'),
      new MenuItem('productos', '', '', 'Productos'),
      new MenuItem('servicios', '', '', 'Servicios'),
      new MenuItem('contacto', '', '', 'Contacto'),
    ];
  }

  /**
   * Given a menu item key (name), it returs the menu item if it exists.
   *
   * @param {string} Key of the menu item.
   * @return {MenuItem} Menu item if found, undefined otherwise.
   */
  public getMenuItemByKey(key: string) {
    let menuItem: MenuItem;

    if (key && this.menuItems && this.menuItems.length) {
      menuItem = this.menuItems.find(item => item.name === key);
    }

    return menuItem;
  }
}
