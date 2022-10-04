import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "./ProductDetails/Header";
import ItemDivision from "./ProductDetails/ItemDivision";
import ImageReview from "./ProductDetails/ImageReview";
// import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  // const params = useParams();
  // console.log(params);
  const location = useLocation();
  const { price, title, image, id } = location.state;
  return (
    <>
      <Header />
      <ItemDivision />
      <ImageReview id={id} price={price} title={title} image={image} />
    </>
  );
};

export default ProductDetail;
