import React, { useContext } from "react";
import classes from "./ProductItem.module.css";
import CartCntxt from "../../store/CartContext";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const cartCntxt = useContext(CartCntxt);
  return (
    <body className={classes.list}>
      <li>
        <div className={classes.title}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.image}>
          <Link to={"/store/" + props.title}>
            {/* <Link to="/store/p1"> */}
            <img src={props.image} alt="" />
          </Link>
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
    </body>
  );
};

export default ProductItem;
