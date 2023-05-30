import { PageReactWidgetController } from "@beyond-js/react-18-widgets/page";
import { StoreManager } from "./store";
import { View } from "./views";

export /*bundle*/
class Controller extends PageReactWidgetController {
  #store;
  createStore(language?: string) {
    this.#store = new StoreManager();
    return this.#store;
  }

  get Widget() {
    return View;
  }
}
