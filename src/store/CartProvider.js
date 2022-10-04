import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const existingItems = [...items];
    // console.log(existingItems);
    const itemIdx = existingItems.findIndex((i) => i.title === item.title);
    // console.log(item.id);
    if (itemIdx !== -1) {
      existingItems[itemIdx].quantity =
        Number(existingItems[itemIdx].quantity) + 1;
      updateItems(existingItems);
    } else {
      updateItems([...items, item]);
    }
  };

  const removeItemFromCartHandler = (item) => {
    const existingItems = [...items];
    const itemIdx = existingItems.findIndex((i) => i.id === item.id);
    if (existingItems[itemIdx].quantity > 1) {
      existingItems[itemIdx].quantity =
        Number(existingItems[itemIdx].quantity) - 1;
      updateItems(existingItems);
    } else {
      existingItems.splice(itemIdx, 1);
      updateItems(existingItems);
    }
  };
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log(cartContext)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
