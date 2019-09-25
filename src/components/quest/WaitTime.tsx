import * as React from "react";
import HumanTime from "../HumanTime";

export default function WaitTime({ time }) {
  return (
    <div>
      Wait <HumanTime time={time} />
      ...
    </div>
  );
}
