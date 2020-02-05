import * as React from "react";
import { rootReducer } from "../store/reducers";
import { initialState } from "../store/initial-state";
import { useEnhancedReducer } from "../hooks/use-enhanced-reducer";
import { firstMiddleware } from "../store/middlewares/first-middlware";
import { secondMiddleware } from "../store/middlewares/second-middlware";

const StateContext = React.createContext(undefined);

const DispatchContext = React.createContext(undefined);

const StoreProvider = ({
                         children,
                       }) => {
  const [state, dispatch] = useEnhancedReducer(
    rootReducer,
    initialState,
    firstMiddleware,
    secondMiddleware,
  );

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
