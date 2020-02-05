import * as React from "react";
import * as classes from "./events-generator.css"
import { EventGenerator } from "../event-generator/event-generator";

const EventsGenerator = () => (
  <div className={classes.eventsGenerator}>
    <EventGenerator event={{name: "first"}} />

    <EventGenerator event={{name: "secondsecondsecondsecond secondsecond"}} />

    <EventGenerator event={{name: "third"}} />
  </div>
);

EventsGenerator.displayName = "EventsGenerator";

export { EventsGenerator };
