import * as React from "react";
import { useSelector } from "../../hooks/use-selector";
import { lastEventSelector, queueSelector } from "../../store/selectors";
import { useDispatch } from "../../hooks/use-dispatch";
import { clearQueueAction, pushEventsAction, removeEventAction, } from "../../store/actions";
import * as classes from "./development-tools.css";

const testEvent = { name: "Test event" };

const testEvents = (new Array(5)).map(() => ({ ...testEvent }));

const EventsGenerator = () => {
  const [dispatch] = useDispatch();

  const onPushEventClick = () => dispatch(pushEventsAction([{ ...testEvent }]));

  const onPushEventsClick = () => dispatch(pushEventsAction([...testEvents]));

  return (
    <div className={classes.eventsGenerator}>
      <button className={classes.button} onClick={onPushEventClick}>
        Push event
      </button>


      <button className={classes.button} onClick={onPushEventsClick}>
        Push events
      </button>
    </div>
  )
};

const EventQueue = () => {
  const [dispatch] = useDispatch();

  const [last] = useSelector(lastEventSelector);

  const [queue] = useSelector(queueSelector);

  const onClick = () => dispatch(clearQueueAction());

  return (
    <div className={classes.eventQueue}>
      <div className={classes.buttonsContainer}>

        <button
          className={classes.button}
          onClick={onClick}
        >
          Clear
        </button>

      </div>

      <div className={classes.eventsContainer}>

        <div
          key={last.id}
          className={`${classes.event} ${classes.last}`}
          title={JSON.stringify(last)}
        >
          <div className={classes.eventId}>
            {last.id}
          </div>

          <div className={classes.eventStatus}>
            {last.status}
          </div>
        </div>

        {
          queue.map((event) => (
            <div
              key={event.id}
              className={classes.event}
              onClick={() => dispatch(removeEventAction(event.id))}
              title={JSON.stringify(event)}
            >
              <div className={classes.eventId}>
                {event.id}
              </div>

              <div className={classes.eventStatus}>
                {event.status}
              </div>
            </div>
          ))
        }

      </div>

    </div>
  );
};


const DevelopmentTools = () => (
  <>
    <EventsGenerator />

    <EventQueue />
  </>
);

EventsGenerator.displayName = "EventsGenerator";

EventQueue.displayName = "EventQueue";

DevelopmentTools.displayName = "DevelopmentTools";

export { DevelopmentTools };
