import { Previewable } from "../interfaces/previewable.interface";

export class Product implements Previewable {

  private _name: string;
  private _label: string;
  private _description: string;
  private _thumbnail: string;
  private _images: string[];

  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  public get label(): string {
    return this._label;
  }

  public set label(value: string) {
    this._label = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(v: string) {
    this._description = v;
  }

  public get thumbnail(): string {
    return this._thumbnail;
  }
  public set thumbnail(v: string) {
    this._thumbnail = v;
  }

  public get images(): string[] {
    return this._images;
  }

  public set images(value: string[]) {
    this._images = value;
  }

  /**
   * Creates a new instance of a Product.
   */
  constructor(jsonOrName?: any, label?: string, description?: string, thumbnail?: string, images?: string[]) {
    if (jsonOrName) {
      if (typeof jsonOrName === 'string') {
        this.name = jsonOrName;
        this.label = label;
        this.description = description;
        this.thumbnail = thumbnail;
        this.images = images;
      } else {
        this.name = jsonOrName.name;
        this.label = jsonOrName.label;
        this.description = jsonOrName.description;
        this.thumbnail = jsonOrName.thumbnail;
        this.images = [];
        if (jsonOrName.images instanceof Array) {
          jsonOrName.images.forEach(image => {
            this.images.push(image);
          });
        }
      }
    } else {
      this.name = '';
      this.label = '';
      this.description = '';
      this.thumbnail = '';
      this.images = [];
    }
  }


  getPreviewData() {
    return {
      title: this.name,
      subtitle: this.description,
      thumbnail: this.thumbnail || ''
    };
  }

}
