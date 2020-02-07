import * as React from "react";
import { rootReducer } from "../store/reducers";
import { initialState } from "../store/initial-state";

const StateContext = React.createContext(undefined);

const DispatchContext = React.createContext(undefined);

const StoreProvider = ({
                         children,
                       }) => {
  const [state, dispatch] = React.useReducer(rootReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

StoreProvider.displayName = "StoreProvider";

export { StateContext, DispatchContext, StoreProvider };
