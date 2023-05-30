import { Item } from "@beyond-js/reactive-2/entities";

interface IConversation {
  id: number;
  groupId: number;
  topic: string;
  createAt: Date;
  updatedAt: Date;
}
export /*bundle */ class Conversation extends Item<IConversation> {
  protected properties = ["id", "groupId", "topic", "createdAt", "updatedAt"];
  protected storeName = "conversations";
  protected db = "airooms";

  constructor(id = undefined) {
    super();
    this.init({ id });
  }

  async load() {
    await super.load(...arguments);
  }
}
