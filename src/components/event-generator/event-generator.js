import * as React from "react";
import { useDispatch } from "../../hooks/use-dispatch";
import { addEventAction } from "../../store/actions";

const EventGenerator = React.memo(({
  event
}) => {
  const [dispatch] = useDispatch();

  const onClick = () => dispatch(addEventAction(event));

  return (
    <button onClick={onClick}>
      {event.name}
    </button>
  );
});

EventGenerator.displayName = "EventGenerator";

export { EventGenerator };
