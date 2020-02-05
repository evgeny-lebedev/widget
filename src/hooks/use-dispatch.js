import * as React from "react";
import { DispatchContext } from "../contexts/store";

const useDispatch = () => [React.useContext(DispatchContext)];

export { useDispatch };