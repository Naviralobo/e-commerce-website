import React from "react";
import ProductItem from "./ProductItem";
import classes from "./AvailableProducts.module.css";

const productsArr = [
  {
    id: "",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
    // remove quantity later
  },
  {
    id: "",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: "",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: "",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const AvailableProducts = () => {
  const productList = productsArr.map((product) => (
    <ProductItem
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.imageUrl}
      item={product}
    />
  ));
  return (
    <div className={classes.styleDiv}>
      <h1>The Generics</h1>
      <ul className={classes.productsList}>{productList}</ul>;
    </div>
  );
};
export default AvailableProducts;
