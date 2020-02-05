import * as React from "react";
import * as classes from "./event-queue.css";
import { useSelector } from "../../hooks/use-selector";
import { queueSelector } from "../../store/selectors";
import { useDispatch } from "../../hooks/use-dispatch";
import { abortQueueAction, clearQueueAction, pauseQueueAction, startQueueAction } from "../../store/actions";
import { useTranslate } from "../../hooks/use-translate";
import { translationKeyMap } from "../../constants/translates";
import { isEmpty } from "../../utils/utils";

const EventQueue = () => {
  const [queue] = useSelector(queueSelector);

  const [dispatch] = useDispatch();

  const [translate] = useTranslate();

  const onClearClick = () => dispatch(clearQueueAction());

  const onStartClick = () => dispatch(startQueueAction());

  const onPauseClick = () => dispatch(pauseQueueAction());

  const onAbortClick = () => dispatch(abortQueueAction());

  return (
    <div className={classes.eventQueue}>
      <div className={classes.buttonsContainer}>
        <button className={classes.button} onClick={onClearClick}>
          {translate(translationKeyMap.clear)}
        </button>

        <button className={classes.button} onClick={onStartClick}>
          {translate(translationKeyMap.start)}
        </button>

        <button className={classes.button} onClick={onPauseClick}>
          {translate(translationKeyMap.pause)}
        </button>

        <button className={classes.button} onClick={onAbortClick}>
          {translate(translationKeyMap.abort)}
        </button>
      </div>

      {
        !isEmpty(queue) && (
          <div className={classes.eventList}>

            {
              queue.map((event) => (
                <div className={classes.event}>
                  {event.name}
                </div>
              ))
            }

          </div>
        )
      }

    </div>
  );
};

EventQueue.displayName = "EventQueue";

export { EventQueue };
