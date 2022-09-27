import React from "react";
import CartItems from "./CartItems";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  const cartItems = cartElements.map((cartElement) => (
    <CartItems
      title={cartElement.title}
      price={cartElement.price}
      image={cartElement.imageUrl}
      quantity={cartElement.quantity}
    />
  ));

  let totalAmount = 0;
  cartElements.map((cartElement) => {
    return (totalAmount =
      totalAmount + cartElement.price * cartElement.quantity);
  });
  return (
    <Modal>
      <div>
        <button className={classes.closeButton} onClick={props.onHideCart}>
          X
        </button>
      </div>
      <div className={classes.cartHeading}>
        <h3>CART</h3>
      </div>
      <div className={classes.subHeading}>
        <span className={classes.item}>ITEM</span>
        <span classNmae={classes.price}>PRICE</span>
        <span className={classes.quantity}>QUANTITY</span>
      </div>
      <ul className={classes.cartUl}>{cartItems}</ul>
      <div className={classes.totalAmount}>
        <span>Total Amount</span>
        <span>Rs.{totalAmount}</span>
      </div>
    </Modal>
  );
};

export default Cart;
