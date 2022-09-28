import React, { useContext } from "react";
import classes from "./ProductItem.module.css";
import CartCntxt from "../../store/CartContext";

const ProductItem = (props) => {
  const cartCntxt = useContext(CartCntxt);
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
          <button
            className={classes.button}
            onClick={() => {
              cartCntxt.addItem(props.item);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </li>
    </div>
  );
};

export default ProductItem;
