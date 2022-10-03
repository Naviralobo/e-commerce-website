import React from "react";
import { useParams } from "react-router-dom";
import Header from "./ProductDetails/Header";
import ItemDivision from "./ProductDetails/ItemDivision";
import ImageReview from "./ProductDetails/ImageReview";
// import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Header />
      <ItemDivision />
      <ImageReview />
    </>
  );
};

export default ProductDetail;
