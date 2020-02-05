import { getActionType } from "./utils/get-action-type";
import { addEventAction, clearQueueAction } from "./actions";
import { createRootReducer } from "./utils/create-root-reducer";

const addEventReducer = (state, action) => ({
  ...state,
  queue: [...state.queue, action.payload.event],
});

const clearQueueReducer = (state) => ({
  ...state,
  queue: [],
});

const rootReducer = createRootReducer({
  [getActionType(addEventAction)]: [addEventReducer],
  [getActionType(clearQueueAction)]: [clearQueueReducer],
});

export { rootReducer };