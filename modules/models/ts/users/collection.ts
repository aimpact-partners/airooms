import { Collection } from "@beyond-js/reactive-2/entities";
import { User } from "./item";

export /*bundle */ class Users extends Collection {
  item = User;
  protected storeName = "users";
  protected db = "airooms";
  constructor() {
    super();
    this.init();
  }
}
