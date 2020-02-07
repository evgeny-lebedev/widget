import { isVoid } from "../../utils/predicates";

const createRootReducer = (reducerMap) => (state, action) => {
  const reducerList = reducerMap[action.type];

  if(isVoid(reducerList)){
    return state;
  }

  return reducerList.reduce(
    (newState, reducer) => reducer(state, action),
    state,
  );
};

export { createRootReducer };
