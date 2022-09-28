import React, { useContext } from "react";
import classes from "./Header.module.css";
import CartCntxt from "../../store/CartContext";
const Header = (props) => {
  const cartCntxt = useContext(CartCntxt);

  let quantity = 0;
  cartCntxt.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <header>
      <div className={classes.header}>
        <ul>
          <li>HOME</li>
          <li>STORE</li>
          <li>ABOUT</li>
        </ul>
        <div className={classes.btn}>
          <button onClick={props.onShowCart} className={classes.button}>
            Cart
          </button>
          <span> {quantity}</span>
        </div>
      </div>
      <h1>The Generics</h1>
    </header>
  );
};

export default Header;
