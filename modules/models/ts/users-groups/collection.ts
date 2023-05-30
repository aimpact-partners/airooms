import { Collection } from "@beyond-js/reactive-2/entities";
import { UserGroup } from "./item";

export /*bundle */ class UserGroups extends Collection {
  item = UserGroup;
  protected storeName = "userGroups";
  protected db = "airooms";
  constructor() {
    super();
    this.init();
  }
}
