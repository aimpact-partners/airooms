import { Item } from "@beyond-js/reactive/entities";

interface IGroup {
  id: number;
  name: string;
  description: string;
  created_by: number;
  createAt: Date;
  updatedAt: Date;
}
export /*bundle */ class Group extends Item<IGroup> {
  protected properties = ["id", "name", "description", "createdBy", "createdAt", "updatedAt"];
  protected storeName = "groups";
  protected db = "airooms";

  constructor(id = undefined) {
    super();
    this.init({ id });
  }

  async load() {
    await super.load(...arguments);
  }
}
