const addEventAction = (event) => ({
  type: "@EVENT/ADD",
  payload: { event },
});

const clearQueueAction = () => ({
  type: "@QUEUE/CLEAR",
});

const startQueueAction = () => ({
  type: "@QUEUE/START",
});

const pauseQueueAction = () => ({
  type: "@QUEUE/PAUSE",
});

const abortQueueAction = () => ({
  type: "@QUEUE/ABORT",
});


export {
  addEventAction,
  clearQueueAction,
  startQueueAction,
  pauseQueueAction,
  abortQueueAction,
};
