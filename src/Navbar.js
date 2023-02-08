import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <a href="/" className={classes.siteTitle}>
        React Hooks
      </a>
      <ul>
        <li>
          <Link to="/">To do List</Link>
          <Link to="/screensize">Screensize </Link>
          <Link to="/counter">Counter</Link>
          <Link to="/generators">Random Generator</Link>
        </li>
      </ul>
    </nav>
  );
};
