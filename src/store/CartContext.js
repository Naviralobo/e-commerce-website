import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  setCartItem: (item) => {},
  update: (items) => {},
});

export default CartContext;
