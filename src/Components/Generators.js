// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CatGenerator } from "./CatGenerator";
import { QuoteGenerator } from "./QuoteGenerator";
import { WouldGenerator } from "./Wouldyourather";
export const Generator = () => {
  return (
    <div>
      <CatGenerator />
      <QuoteGenerator />
      <WouldGenerator />
    </div>
  );
};
