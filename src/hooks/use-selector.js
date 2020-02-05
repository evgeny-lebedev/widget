import * as React from "react";
import { StateContext } from "../contexts/store";

const useSelector = (selector, ...args) => [((state) => selector(state, ...args))(React.useContext(StateContext))];

export { useSelector };