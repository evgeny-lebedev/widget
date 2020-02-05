import { getActionType } from "./get-action-type";

const oneOfActions = (action, ...creators) => creators.some((creator) => getActionType(creator) === action.type);

export { oneOfActions };
