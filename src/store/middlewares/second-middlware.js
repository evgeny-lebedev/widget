import { oneOfActions } from "../utils/one-of-actions";
import { startQueueAction } from "../actions";

const secondMiddleware = (store, action) => {
  if (oneOfActions(action, startQueueAction)) {
    console.log("start queue");
  }
};

export { secondMiddleware };
