import { Item } from "@beyond-js/reactive/entities";

interface IUser {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  createAt: Date;
  updatedAt: Date;
}
export /*bundle */ class User extends Item<IUser> {
  protected properties = ["id", "username", "email", "passwordHash", "createdAt", "updatedAt"];
  protected storeName = "users";
  protected db = "airooms";

  constructor(id = undefined) {
    super();
    this.init({ id });
  }

  async load() {
    await super.load(...arguments);
  }
}
