import React, { useContext } from "react";
import CartItems from "./CartItems";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartCntxt from "../../store/CartContext";
// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },
//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];

const Cart = (props) => {
  const cartCntxt = useContext(CartCntxt);

  const cartItems = cartCntxt.items.map((cartElement) => (
    <CartItems
      title={cartElement.title}
      price={cartElement.price}
      imageUrl={cartElement.imageUrl}
      quantity={cartElement.quantity}
      id={cartElement._id}
      item={cartElement}
    />
  ));

  let totalAmount = 0;
  cartCntxt.items.map((cartElement) => {
    return (totalAmount = Number(
      totalAmount + cartElement.price * cartElement.quantity
    ));
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
        <span className={classes.price}>PRICE</span>
        <span className={classes.quantity}>QUANTITY</span>
      </div>
      <ul className={classes.cartUl}>{cartItems}</ul>
      <div className={classes.totalAmount}>
        <span>Total Amount</span>
        <span>Rs.{totalAmount}</span>
      </div>
      <button className={classes.purchaseButton}>PURCHASE</button>
    </Modal>
  );
};

export default Cart;
