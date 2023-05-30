import { Collection } from "@beyond-js/reactive/entities";
import { MessageCategory } from "./item";

export /*bundle */ class MessageCategories extends Collection {
  item = MessageCategory;
  protected storeName = "messageCategories";
  protected db = "airooms";
  constructor() {
    super();
    this.init();
  }
}
