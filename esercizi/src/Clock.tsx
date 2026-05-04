import { useState } from "react";
import { useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState(/* ora iniziale */);

  useEffect(() => {
    set

    return () => {
      // pulizia timer
    };
  }, []);

  return <h2>{time}</h2>;
}