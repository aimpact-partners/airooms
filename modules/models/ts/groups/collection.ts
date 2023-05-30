import { Collection } from "@beyond-js/reactive/entities";
import { Group } from "./item";

export /*bundle */ class Groups extends Collection {
  item = Group;
  protected storeName = "groups";
  protected db = "airooms";
  constructor() {
    super();
    this.init();
  }
}
