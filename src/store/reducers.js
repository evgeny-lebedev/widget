import { getActionType } from "./utils/get-action-type";
import {
  clearQueueAction,
  pushEventsAction,
  removeEventAction,
  setLastEventAction,
  updateEventStatusAction
} from "./actions";
import { createRootReducer } from "./utils/create-root-reducer";
import { eventStatusesMap } from "../constants/event-statuses";
import { generateId } from "./utils/generate-id";
import { generateRandomNumber } from "../utils/generate-random-number";

const pushEventsReducer = (state, action) => ({
  ...state,
  queue: [
    ...state.queue,
    ...action.payload.events.map((event) => ({
      ...event,
      id: generateId(),
      status: eventStatusesMap.awaiting,
      duration: generateRandomNumber(500, 3000),
      start: generateRandomNumber(0, 360),
      end: generateRandomNumber(0, 360),
    })),
  ],
});

const removeEventReducer = (state, action) => ({
  ...state,
  queue: state.queue.filter((event) => event.id !== action.payload.id),
});

const updateEventStatusReducer = (state, action) => ({
  ...state,
  queue: state.queue.map((event) => {
    if (event.id === action.payload.id) {
      return ({
        ...event,
        status: action.payload.status,
      })
    }

    return event;
  }),
});

const setLastEventReducer = (state, action) => ({
  ...state,
  last: { ...action.payload.event, status: eventStatusesMap.completed },
});

const clearQueueReducer = (state) => ({
  ...state,
  queue: [],
});

const rootReducer = createRootReducer({
  [getActionType(pushEventsAction)]: [pushEventsReducer],
  [getActionType(removeEventAction)]: [removeEventReducer],
  [getActionType(updateEventStatusAction)]: [updateEventStatusReducer],
  [getActionType(setLastEventAction)]: [setLastEventReducer],
  [getActionType(clearQueueAction)]: [clearQueueReducer],
});

export { rootReducer };
