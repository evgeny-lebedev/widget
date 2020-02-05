import * as React from "react";
import { EventsGenerator } from "../events-generator/events-generator";
import { EventQueue } from "../event-queue/event-queue";

const DevelopmentTools = () => (
  <>
    <EventsGenerator />

    <EventQueue/>
  </>
);

DevelopmentTools.displayName = "DevelopmentTools";

export { DevelopmentTools };