import * as React from "react";
import classes from "./event.css";
import { generateRandomColor } from "../../utils/generate-random-color";
import { useSelector } from "../../hooks/use-selector";
import { currentEventSelector, lastEventSelector } from "../../store/selectors";
import { useDispatch } from "../../hooks/use-dispatch";
import { removeEventAction, setLastEventAction, updateEventStatusAction } from "../../store/actions";
import { eventStatusesMap } from "../../constants/event-statuses";

const getRotationsAngle = (range, progress) => range * progress;

const startAnimation = (duration, timingFunction, drawFunction) => {
  let requestId = null;

  const start = performance.now();

  const callback = (time) => {
    let timeFraction = (time - start) / duration;

    if (timeFraction > 1) timeFraction = 1;

    const progress = timingFunction(timeFraction);

    drawFunction(progress);

    if (timeFraction < 1) {
      requestId = window.requestAnimationFrame(callback);
    }
  };

  requestId = window.requestAnimationFrame(callback);

  return () => {
    window.cancelAnimationFrame(requestId);
  }
};

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

  const onProgress = (progress) => {
    dispatch(setLastEventAction({ ...current, progress }));
  };

  return [
    onMount, onUnmount, onProgress, onComplete,
  ];
};

const Event = () => {
  const [onMount, onUnmount, onProgress, onComplete] = useEvent();

  const [last] = useSelector(lastEventSelector);

  const [current] = useSelector(currentEventSelector);

  const [progress, setProgress] = React.useState(0);

  const [realStart, setRealStart] = React.useState(last.progress ?? current.start);

  const [range, setRange] = React.useState(Math.abs(current.end - realStart));

  const [rotationAngle, setRotationAngle] = React.useState(realStart + getRotationsAngle(range, progress));

  const [color, setColor] = React.useState(generateRandomColor(0.4));

  React.useEffect(
    () => {
      onMount();

      const newRealStart = last.progress ?? current.start;

      const newRange = Math.abs(current.end - newRealStart);

      const predicate = current.end > newRealStart ? 1 : -1;

      setColor(generateRandomColor(0.4));

      setRealStart(newRealStart);

      setRange(newRange);

      document.body.style.backgroundColor = color;

      const stopAnimation = startAnimation(
        current.duration,
        (timeFraction) => Math.pow(timeFraction, 3),
        (p) => {
          const newProgress = p * predicate;

          const newRotationAngle = newRealStart + getRotationsAngle(newRange, newProgress);

          setRotationAngle(newRotationAngle);

          onProgress(newRotationAngle);

          setProgress(newProgress);

          if (p === 1) {
            stopAnimation();

            onComplete();
          }
        });

      return () => {
        stopAnimation();

        onUnmount();
      };
    },
    [current.id],
  );

  return (
    <>
      <div className={classes.event}>
        <div
          className={classes.rectangle}
          style={{
            transform: `rotate(${rotationAngle}deg) translate(0, -13vmin)`,
            backgroundColor: color,
          }}
        />
      </div>

      <div className={classes.infoContainer}>
        <div className={classes.info}>
          Real start: {Math.round(realStart)}
        </div>

        <div className={classes.info}>
          Start: {current.start}
        </div>

        <div className={classes.info}>
          End: {current.end}
        </div>
      </div>
    </>
  );
};

Event.displayName = "Event";

export { Event };
