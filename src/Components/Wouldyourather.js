import { useState, useEffect } from "react";
import classes from "./Counter.module.css";
import Axios from "axios";

export const WouldGenerator = () => {
  const [would, setWould] = useState("");

  const fetchWould = () => {
    Axios.get("https://would-you-rather-api.abaanshanid.repl.co/").then(
      (res) => {
        setWould(res.data.data);
      }
    );
  };

  useEffect(() => {
    return () => {
      fetchWould();
    };
  }, []);

  return (
    <div className={classes.card}>
      <h1 className={classes.title}>Would you rather?</h1>
      <span>{would}</span>
      <button onClick={fetchWould} className={classes.button}>
        Next Question
      </button>
    </div>
  );
};
