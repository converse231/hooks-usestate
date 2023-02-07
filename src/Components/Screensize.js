import { useState, useEffect } from "react";
import classes from "./Counter.module.css";
export const Screensize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.card}>
      <h1 className={classes.title}>SIMPLE useEffect function</h1>
      <div className={classes.cardContent}>
        <span>Size of the screen is {windowWidth} px</span>
      </div>
    </div>
  );
};
