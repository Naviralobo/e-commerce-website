import React from "react";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <header>
      <div className={classes.header}>
        <ul>
          <li>HOME</li>
          <li>STORE</li>
          <li>ABOUT</li>
        </ul>
        <div className={classes.btn}>
          <button className={classes.button}>Cart</button>
          <span> 0</span>
        </div>
      </div>
      <h1>The Generics</h1>
    </header>
  );
};

export default Header;
