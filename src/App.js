import "./App.css";
import { useState, useEffect } from "react";

function App() {
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

  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const minusCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount((prevCount) => prevCount - prevCount);
  };

  return (
    <div className="App">
      <div className="card">
        <h1 className="title">SIMPLE useEffect function</h1>
        <div className="card-content">
          <span>Size of the screen is {windowWidth} px</span>
        </div>
      </div>
      <div className="card">
        <h1 className="title">SIMPLE COUNTER MADE with useState</h1>
        <div className="card-content">
          <button onClick={minusCount}>-</button>
          <span>{count}</span>
          <button onClick={plusCount}>+</button>
          <button onClick={resetCount}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
