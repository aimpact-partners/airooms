import { Item } from "@beyond-js/reactive-2/entities";

interface IMessage {
  id: number;
  userId: number;
  conversationId: number;
  content: string;
  createAt: Date;
  updatedAt: Date;
}
export /*bundle */ class Message extends Item<IMessage> {
  protected properties = ["id", "userId", "conversationId", "content", "createdAt", "updatedAt"];
  protected storeName = "messages";
  protected db = "airooms";

  constructor(id = undefined) {
    super();
    this.init({ id });
  }

  async load() {
    await super.load(...arguments);
  }
}
