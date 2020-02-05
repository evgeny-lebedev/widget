import { oneOfActions } from "../utils/one-of-actions";
import { addEventAction } from "../actions";

const firstMiddleware = ({ getState, dispatch }, action) => {
  if (oneOfActions(action, addEventAction)) {
    console.log("event added");
  }
};

export { firstMiddleware };
