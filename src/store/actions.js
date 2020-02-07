const pushEventsAction = (events) => ({
  type: "@EVENTS/PUSH",
  payload: { events },
});

const setLastEventAction = (event) => ({
  type: "@LAST_EVENT/SET",
  payload: { event },
});

const updateEventStatusAction = (id, status) => ({
  type: "@EVENT/UPDATE_STATUS",
  payload: { id, status },
});

const removeEventAction = (id) => ({
  type: "@EVENT/REMOVE",
  payload: { id },
});

const clearQueueAction = () => ({
  type: "@QUEUE/CLEAR",
});

export {
  pushEventsAction,
  removeEventAction,
  clearQueueAction,
  setLastEventAction,
  updateEventStatusAction,
};
