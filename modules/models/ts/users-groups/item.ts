import { Item } from "@beyond-js/reactive-2/entities";

interface IUserGroup {
  id: number;
  userId: number;
  groupId: number;
  createAt: Date;
  updatedAt: Date;
}
export /*bundle */ class UserGroup extends Item<IUserGroup> {
  protected properties = ["id", "userId", "groupId", "createdAt", "updatedAt"];
  protected storeName = "userGroups";
  protected db = "airooms";

  constructor(id = undefined) {
    super();
    this.init({ id });
  }

  async load() {
    await super.load(...arguments);
  }
}
