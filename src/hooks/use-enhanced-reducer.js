import * as React from "react";

const useEnhancedReducer = (reducer, initialState, ...middlewares) => {
  const hookResult = React.useState(initialState);

  let state = hookResult[0];

  const setState = hookResult[1];

  const dispatch = (action) => {
    state = reducer(state, action);

    setState(state);

    return action;
  };

  let enhancedDispatch = () => undefined;

  const store = {
    getState: () => state,
    dispatch: (...args) => enhancedDispatch(...args),
  };

  enhancedDispatch = (action) => {
    dispatch(action);

    middlewares.forEach((middleware) => middleware(store, action));
  };

  return [state, enhancedDispatch];
};

export { useEnhancedReducer };
