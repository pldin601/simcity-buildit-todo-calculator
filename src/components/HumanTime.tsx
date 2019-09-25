import * as React from "react";

export default function HumanTime({ time }) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = time % 60;
  return (
    <>
      {hours > 0 ? <>{hours}h</> : null}
      {minutes > 0 ? <>{minutes}m</> : null}
      {seconds > 0 ? <>{seconds}s</> : null}
    </>
  );
}
