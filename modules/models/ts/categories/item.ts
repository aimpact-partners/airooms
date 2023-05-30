import { Item } from "@beyond-js/reactive-2/entities";

interface ICategory {
  id: number;
  name: string;
  description: string;
  created_by: number;
  createAt: Date;
  updatedAt: Date;
}
export /*bundle */ class Category extends Item<ICategory> {
  protected properties = ["id", "name", "description", "createdBy", "createdAt", "updatedAt"];
  protected storeName = "category";
  protected db = "airooms";

  constructor(id = undefined) {
    super();
    this.init({ id });
  }

  async load() {
    await super.load(...arguments);
  }
}
