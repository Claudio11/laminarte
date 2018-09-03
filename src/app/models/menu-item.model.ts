import { Previewable } from "../interfaces/previewable.interface";

export class MenuItem implements Previewable {

  private _name: string;
  private _title: string;
  private _subtitle: string;
  private _shortTitle: string;

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get title(): string {
    return this._title;
  }
  public set title(v: string) {
    this._title = v;
  }

  public get subtitle(): string {
    return this._subtitle;
  }
  public set subtitle(v: string) {
    this._subtitle = v;
  }

  public get shortTitle(): string {
    return this._shortTitle;
  }
  public set shortTitle(v: string) {
    this._shortTitle = v;
  }

  /**
   * Creates a new instance of a Product.
   */
  constructor(jsonOrName?: any, title?: string, subtitle?: string, shortTitle?: string) {
    if (jsonOrName) {
      if (typeof jsonOrName === 'string') {
        this.name = jsonOrName;
        this.title = title;
        this.subtitle = subtitle;
        this.shortTitle = shortTitle;
      } else {
        this.name = jsonOrName.name;
        this.title = jsonOrName.title;
        this.subtitle = jsonOrName.subtitle;
        this.shortTitle = jsonOrName.shortTitle;
      }
    } else {
      this.name = '';
      this.title = '';
      this.subtitle = '';
      this.shortTitle = '';
    }
  }


  getPreviewData() {
    return {
      title: this.title,
      subtitle: this.subtitle,
      mainImg: ''
    };
  }

}
