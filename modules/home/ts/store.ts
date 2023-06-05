import { ReactiveModel } from "@beyond-js/reactive-2/model";
import { AIModel } from "@aimpact/backend/aihub";

interface IStore {}
export interface IMessages {
  role: 'user'|'system';
  content: string;
}
export class StoreManager extends ReactiveModel<IStore> {
  #model = new AIModel();

  #messages: IMessages[] = [];
  get messages() {
    return this.#messages;
  }

  async query(question: string) {
    this.fetching = true;
    this.#messages.push({ role: "user", content: question });
    this.triggerEvent();

    const response = await this.#model.chat(this.#messages);
    console.log("hi response", response, this.#messages);
    if (!response.status) {
      console.error("Error on embeddings", response.error);
    }

    this.fetching = false;
    this.#messages.push({ role: "system", content: response.data });
    this.triggerEvent();
  }
}
