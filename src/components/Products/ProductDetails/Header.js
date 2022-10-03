import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <div>
          <h3>The Generics</h3>
          <h6>ExplorePlus</h6>
        </div>
        <div className={classes.searchBar}>
          <input
            className={classes.searchInput}
            type="text"
            placeholder="Search for products brands and more"
          />
          <img
            className={classes.searchImage}
            src="/images/searchButton.png"
            alt="search"
          ></img>
        </div>

        <button className={classes.loginButton}>Login</button>
        <button>Become a seller</button>
        <div className={classes.dropDown}>
          <button>more</button>
          <div className={classes.dropDownContent}>
            <span>notifications</span>
            <span>customer care</span>
            <span>advertise</span>
          </div>
        </div>
        <img
          className={classes.cartImage}
          src="/images/cartIcon.png"
          alt="search"
        ></img>
        <button className={classes.cartButton}>Cart</button>
      </div>
    </header>
  );
};
export default Header;
