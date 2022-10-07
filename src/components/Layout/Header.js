import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import CartCntxt from "../../store/CartContext";
import AuthContext from "../../store/AuthContext";
const Header = (props) => {
  const cartCntxt = useContext(CartCntxt);
  const authCntxt = useContext(AuthContext);

  let quantity = 0;

  cartCntxt.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <header>
      <div className={classes.header}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/store">
              STORE
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/contact">
              CONTACTUS
            </NavLink>
          </li>
          {!authCntxt.isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/login">
                LOGIN
              </NavLink>
            </li>
          )}
          {authCntxt.isLoggedIn && (
            <li>
              <button
                className={classes.logoutBtn}
                onClick={() => authCntxt.logout()}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
        {authCntxt.isLoggedIn && (
          <div className={classes.btn}>
            <button onClick={props.onShowCart} className={classes.button}>
              Cart
            </button>
            <span> {quantity}</span>
          </div>
        )}
      </div>
      {/* <h1>The Generics</h1> */}
    </header>
  );
};

export default Header;
