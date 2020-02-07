import * as React from "react";
import classes from "./event.css";
import { generateRandomColor } from "../../utils/generate-random-color";
import { useSelector } from "../../hooks/use-selector";
import { currentEventSelector, lastEventSelector } from "../../store/selectors";
import { startAnimation } from "../../utils/start-animation";
import { useEvent } from "../../hooks/use-event";

const getRotationsAngle = (range, progress) => range * progress;

const Event = () => {
  const [onMount, onUnmount, onProgress, onComplete] = useEvent();

  const [last] = useSelector(lastEventSelector);

  const [current] = useSelector(currentEventSelector);

  const [progress, setProgress] = React.useState(0);

  const [start, setStart] = React.useState(last.state ?? current.start);

  const [range, setRange] = React.useState(Math.abs(current.end - start));

  const [rotationAngle, setRotationAngle] = React.useState(start + getRotationsAngle(range, progress));

  const [color, setColor] = React.useState(generateRandomColor(0.4));

  React.useEffect(
    () => {
      onMount();

      const newStart = last.state ?? current.start;

      const newRange = Math.abs(current.end - newStart);

      const predicate = current.end > newStart ? 1 : -1;

      setColor(generateRandomColor(0.4));

      setStart(newStart);

      setRange(newRange);

      document.body.style.backgroundColor = color;

      const stopAnimation = startAnimation(
        current.duration,
        (timeFraction) => Math.pow(timeFraction, 3),
        (p) => {
          const newProgress = p * predicate;

          const newRotationAngle = newStart + getRotationsAngle(newRange, newProgress);

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
          Real start: {Math.round(start)}
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
