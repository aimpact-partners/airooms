import { Item } from "@beyond-js/reactive/entities";

interface IMessageCategory {
  id: number;
  messageId: number;
  categoryId: number;
  assignedAt: number;
  createAt: Date;
  updatedAt: Date;
}
export /*bundle */ class MessageCategory extends Item<IMessageCategory> {
  protected properties = ["id", "messageId", "categoryId", "assignedAt", "createdAt", "updatedAt"];
  protected storeName = "messageCategories";
  protected db = "airooms";

  constructor(id = undefined) {
    super();
    this.init({ id });
  }

  async load() {
    await super.load(...arguments);
  }
}
