import { useState, useEffect } from "react";
import classes from "./Counter.module.css";
import Axios from "axios";

export const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = () => {
    Axios.get("https://api.quotable.io/random").then((res) => {
      setQuote(res.data.content);
      setAuthor(res.data.author);
    });
  };

  useEffect(() => {
    return () => {
      fetchQuote();
    };
  }, []);

  return (
    <div className={classes.card}>
      <h1 className={classes.title}>Inspirational Quote Generator</h1>
      <span>{quote}</span>
      <span className={classes.author}> -{author}</span>
      <button onClick={fetchQuote} className={classes.button}>
        Generate another
      </button>
    </div>
  );
};
