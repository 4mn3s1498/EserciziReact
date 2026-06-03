import { useState } from "react";
import { useEffect } from "react";
import "./clock.scss";

export function Clock() {
  const [time, setTime] = useState(new Date());

    useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);

  return <h2 className="clock">{time.toLocaleTimeString()}</h2>;
}