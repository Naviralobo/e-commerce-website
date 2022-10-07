import React, { useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import AuthContext from "./AuthContext";
import axios from "axios";

const CartProvider = (props) => {
  const authCntxt = useContext(AuthContext);
  const [items, updateItems] = useState([]);
  const email = localStorage.getItem("email");
  let crudEmail;
  if (email != null) {
    crudEmail = email.replace(/[@.]/g, "");
  }

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/c9b8980b2e6d49d4b8801f6a29d3cda3/cart${crudEmail}`
      )
      .then((response) => {
        const cartItems = [];
        for (let i = 0; i < response.data.length; i++) {
          let item = response.data[i];
          // setCartItemHandler(item);
          const index = cartItems.findIndex((i) => i.title === item.title);
          if (index == -1) {
            cartItems.push(response.data[i]);
          } else {
            cartItems[index].quantity = cartItems[index].quantity + 1;
          }
        }
        updateItems(cartItems);
      })
      .catch((err) => console.log(err));
  }, []);

  const addItemToCartHandler = (item) => {
    const cartObj = {
      price: item.price,
      title: item.title,
      quantity: 1,
      // image: item.image,
      // id: item.id,
    };
    axios
      .post(
        `https://crudcrud.com/api/c9b8980b2e6d49d4b8801f6a29d3cda3/cart${crudEmail}`,
        cartObj
      )
      .then((response) => {
        console.log(response);
        setCartItemHandler(response.data);
      })
      .catch((err) => console.log(err));
  };

  const removeItemFromCartHandler = (item) => {
    console.log(item);
    axios
      .delete(
        `https://crudcrud.com/api/c9b8980b2e6d49d4b8801f6a29d3cda3/cart${crudEmail}/${item._id}`
      )
      .then((response) => {
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
      })
      .catch((err) => console.log(err));
  };
  const setCartItemHandler = (item) => {
    const existingItems = [...items];
    const itemIdx = existingItems.findIndex((i) => i.title === item.title);
    if (itemIdx !== -1) {
      existingItems[itemIdx].quantity =
        Number(existingItems[itemIdx].quantity) + 1;

      updateItems(existingItems);
    } else {
      updateItems([...items, item]);
    }
  };
  function updateItemsHandler(items) {
    console.log(items);
    updateItems(items); //setItems
  }

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    setCartItem: setCartItemHandler,
    updateItem: updateItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log(cartContext)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
