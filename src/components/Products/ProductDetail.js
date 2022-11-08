import React from "react";
import { useLocation } from "react-router-dom"; //useParams was used before
import Header from "./ProductDetails/Header";
import ItemDivision from "./ProductDetails/ItemDivision";
import ImageReview from "./ProductDetails/ImageReview";
// import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  // const params = useParams();
  // console.log(params);
  const location = useLocation();
  const { price, title, imageUrl, id } = location.state;
  return (
    <>
      <Header />
      <ItemDivision />
      <ImageReview id={id} price={price} title={title} imageUrl={imageUrl} />
    </>
  );
};

export default ProductDetail;
