import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Counter } from "./Components/Counter";
import { Screensize } from "./Components/Screensize";
import { Generator } from "./Components/Generators";
import { Todolist } from "./Components/Todolist";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <div className="Main">
          <Routes>
            <Route path="/screensize" element={<Screensize />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/generators" element={<Generator />} />
            <Route path="/" element={<Todolist />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
