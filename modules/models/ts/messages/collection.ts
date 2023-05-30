import { Collection } from "@beyond-js/reactive-2/entities";
import { Message } from "./item";

export /*bundle */ class Messages extends Collection {
  item = Message;
  protected storeName = "messages";
  protected db = "airooms";
  constructor() {
    super();
    this.init();
  }
}
