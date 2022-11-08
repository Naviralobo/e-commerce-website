import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

import axios from "axios";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const email = localStorage.getItem("email");
  let crudEmail;
  if (email != null) {
    crudEmail = email.replace(/[@.]/g, "");
  }

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/85da8fb90d454c97ad510aa5a880fe3a/cart${crudEmail}`
      )
      .then((res) => {
        let cartItems = [];
        for (let i = 0; i < res.data.length; i++) {
          let item = res.data[i];
          cartItems.push(item);
        }
        updateItems(cartItems);
      })
      .catch((err) => console.log(err));
  }, [crudEmail]);

  const addItemToCartHandler = (item) => {
    const existingItems = [...items];
    const itemIdx = existingItems.findIndex((i) => i.title === item.title);
    if (itemIdx !== -1) {
      console.log(existingItems[itemIdx]);
      const cartObj = {
        price: existingItems[itemIdx].price,
        title: existingItems[itemIdx].title,
        quantity: Number(existingItems[itemIdx].quantity) + 1,
        imageUrl: existingItems[itemIdx].imageUrl,
      };
      axios
        .put(
          `https://crudcrud.com/api/85da8fb90d454c97ad510aa5a880fe3a/cart${crudEmail}/${existingItems[itemIdx]._id}`,
          cartObj
        )
        .then(() => {
          let newCartItems = [...items];
          // newCartItems[itemIdx].quantity = cartObj.quantity;
          newCartItems[itemIdx].quantity++;
          updateItems(newCartItems);
        });
    } else {
      axios
        .post(
          `https://crudcrud.com/api/85da8fb90d454c97ad510aa5a880fe3a/cart${crudEmail}`,
          item
        )
        .then((response) => {
          updateItems([...items, response.data]);
        })
        .catch((err) => console.log(err));
    }
  };
  const removeItemFromCartHandler = (item) => {
    const existingItems = [...items];
    const itemIdx = existingItems.findIndex((i) => i.title === item.title);
    if (item.quantity > 1) {
      const cartObj = {
        price: item.price,
        title: item.title,
        quantity: Number(item.quantity) - 1,
        imageUrl: item.imageUrl,
      };
      axios
        .put(
          `https://crudcrud.com/api/85da8fb90d454c97ad510aa5a880fe3a/cart${crudEmail}/${existingItems[itemIdx]._id}`,
          cartObj
        )
        .then(() => {
          let newCartItems = [...items];
          newCartItems[itemIdx].quantity = cartObj.quantity;
          updateItems(newCartItems);
        });
    } else if (item.quantity === 1) {
      axios
        .delete(
          `https://crudcrud.com/api/85da8fb90d454c97ad510aa5a880fe3a/cart${crudEmail}/${item._id}`
        )
        .then((response) => {
          const existingItems = [...items];
          const itemIdx = existingItems.findIndex((i) => i._id === item._id);
          existingItems.splice(itemIdx, 1);
          updateItems(existingItems);
        })

        .catch((err) => console.log(err));
    }
  };
  function updateItemsHandler(items) {
    updateItems(items); //setItems
  }

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    update: updateItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log(cartContext)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
