import { Item } from "@beyond-js/reactive/entities";

interface IDocument {
  id: number;
  groupId: number;
  createdBy: number;
  content: string;
  createAt: Date;
  updatedAt: Date;
}
export /*bundle */ class Document extends Item<IDocument> {
  protected properties = ["id", "groupId", "createdBy", "content", "createdAt", "updatedAt"];
  protected storeName = "documents";
  protected db = "airooms";

  constructor(id = undefined) {
    super();
    this.init({ id });
  }

  async load() {
    await super.load(...arguments);
  }
}
