const queueSelector = (state) => state.queue;

const lastEventSelector = (state) => state.last;

const currentEventSelector = (state) => queueSelector(state)[0];

export {
  queueSelector,
  lastEventSelector,
  currentEventSelector,
};
