import * as React from "react";
import { DevelopmentTools } from "../development-tools/development-tools";
import { Event } from "../event/event";
import { useSelector } from "../../hooks/use-selector";
import { queueSelector } from "../../store/selectors";
import { isEmpty } from "../../utils/predicates";


const App = () => {
  const [queue] = useSelector(queueSelector);

  return (
    <>
      <DevelopmentTools />

      {
        !isEmpty(queue) && (
          <Event />
        )
      }

    </>
  )
};

App.displayName = "App";

export { App };
