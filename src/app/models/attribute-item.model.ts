import { Previewable } from "../interfaces/previewable.interface";

export class AttributeItem implements Previewable {

  private _name: string;
  private _description: string;

  public get description(): string {
    return this._description;
  }
  public set description(v: string) {
    this._description = v;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  /**
   * Creates a new instance of a Product.
   */
  constructor(jsonOrName?: any, description?: string) {
    if (jsonOrName) {
      if (typeof jsonOrName === 'string') {
        this.name = jsonOrName;
        this.description = description;
      } else {
        this.name = jsonOrName.name;
        this.description = jsonOrName.description;
      }
    } else {
      this.name = '';
      this.description = '';
    }
  }


  getPreviewData() {
    return {
      title: this.name,
      subtitle: this.description,
      mainImg: ''
    };
  }

}
