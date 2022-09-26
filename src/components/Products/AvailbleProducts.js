import React from "react";
import ProductItem from "./ProductItem";
import classes from "./AvailableProducts.module.css";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProducts = () => {
  const productList = productsArr.map((product) => (
    <ProductItem
      id={product.title}
      title={product.title}
      price={product.price}
      image={product.imageUrl}
    />
  ));
  return (
    <div className={classes.styleDiv}>
      <ul className={classes.productsList}>{productList}</ul>;
    </div>
  );
};
export default AvailableProducts;
