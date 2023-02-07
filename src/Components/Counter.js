import classes from "./Counter.module.css";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const minusCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount((prevCount) => (prevCount = 0));
  };

  return (
    <div className={classes.card}>
      <h1 className={classes.title}>SIMPLE COUNTER MADE with useState</h1>
      <div className={classes.cardContent}>
        <button className={classes.button} onClick={minusCount}>
          -
        </button>
        <span className={classes.count}>{count}</span>
        <button className={classes.button} onClick={plusCount}>
          +
        </button>
        <button className={classes.button} onClick={resetCount}>
          reset
        </button>
      </div>
    </div>
  );
};
