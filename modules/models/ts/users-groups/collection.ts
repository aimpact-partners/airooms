import { Collection } from "@beyond-js/reactive/entities";
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
