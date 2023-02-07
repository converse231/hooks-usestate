import { useState, useEffect } from "react";
import classes from "./Counter.module.css";
import Axios from "axios";
export const CatGenerator = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    return () => {
      fetchCatFact();
    };
  }, []);

  return (
    <div className={classes.card}>
      <h1 className={classes.title}>Cat Fact Generator</h1>
      <span>{catFact}</span>
      <button onClick={fetchCatFact} className={classes.button}>
        Generate another
      </button>
    </div>
  );
};
