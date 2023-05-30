import { Collection } from "@beyond-js/reactive-2/entities";
import { Conversation } from "./item";

export /*bundle */ class Conversations extends Collection {
  item = Conversation;
  protected storeName = "conversations";
  protected db = "airooms";
  constructor() {
    super();
    this.init();
  }
}
