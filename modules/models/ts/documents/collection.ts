import { Collection } from "@beyond-js/reactive-2/entities";
import { Document } from "./item";

export /*bundle */ class Documents extends Collection {
  item = Document;
  protected storeName = "documents";
  protected db = "airooms";
  constructor() {
    super();
    this.init();
  }
}
