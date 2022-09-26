import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={classes.list}>
      <li>
        <div className={classes.title}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.image}>
          <img src={props.image} />
        </div>
        <div className={classes.price}>
          <span>${props.price}</span>
          <button className={classes.button}>ADD TO CART</button>
        </div>
      </li>
    </div>
  );
};

export default ProductItem;
