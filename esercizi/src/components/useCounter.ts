import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((c) => c + 1);
  }

  function decrement() {
    setCounter((c) => c - 1);
  }

  function reset() {
    setCounter(0);
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  };
}