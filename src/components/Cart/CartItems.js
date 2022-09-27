import React from "react";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  return (
    <li className={classes.cartItemList}>
      <div className={classes.cartColumn}></div>
      <span className={classes.items}>
        <img src={props.image} />
        <span>{props.title}</span>
      </span>

      <span className={classes.price}>{props.price}</span>
      <span className={classes.cartQuantity}>{props.quantity}</span>
      <button className={classes.removeButton}>Remove</button>
    </li>
  );
};
export default CartItems;
