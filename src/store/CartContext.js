import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  setCartItem: (item) => {},
  updateItem: (items) => {},
});

export default CartContext;
