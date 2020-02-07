import { useDispatch } from "./use-dispatch";
import { useSelector } from "./use-selector";
import { currentEventSelector } from "../store/selectors";
import { removeEventAction, setLastEventAction, updateEventStatusAction } from "../store/actions";
import { eventStatusesMap } from "../constants/event-statuses";

const useEvent = () => {
  const [dispatch] = useDispatch();

  const [current] = useSelector(currentEventSelector);

  const onMount = () => {
    dispatch(updateEventStatusAction(current.id, eventStatusesMap.playing));

    dispatch(setLastEventAction({ ...current }));
  };

  const onUnmount = () => {
    dispatch(updateEventStatusAction(current.id, eventStatusesMap.completed));

    dispatch(removeEventAction());
  };

  const onComplete = () => {
    dispatch(updateEventStatusAction(current.id, eventStatusesMap.completed));

    dispatch(removeEventAction(current.id));
  };

  const onProgress = (state) => {
    dispatch(setLastEventAction({ ...current, state }));
  };

  return [onMount, onUnmount, onProgress, onComplete];
};

export { useEvent };
