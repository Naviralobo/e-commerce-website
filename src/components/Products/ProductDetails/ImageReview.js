import React, { useState } from "react";
import classes from "./ImageReview.module.css";
import ReactImageMagnify from "react-image-magnify";
const images = [
  "/images/t1.webp",
  "/images/t2.webp",
  "/images/t3.webp",
  "/images/t4.webp",
  "/images/t5.webp",
  "/images/t6.webp",
];

const ImageReview = () => {
  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.left1}>
          {images.map((image, i) => (
            <div
              className={classes.imgWrap}
              key={i}
              onMouseOver={() => hoverHandler(image, i)}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div className={classes.left2}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "",
                src: img,
                isFluidWidth: true,
                width: 50,
                height: 50,
              },
              largeImage: {
                src: img,
                width: 1000,
                height: 1000,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "100%",
                src: img,
              },
            }}
          />
          <div className={classes.button}>
            <button className={classes.cartBtn}> ADD TO CART</button>
            <button className={classes.buyBtn}>BUY NOW</button>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <p className={classes.link}>
          HomeClothing -Accessories- Men'sSweatshirts -Smartees
          -Men'Sweatshirts...
        </p>
        <h3 className={classes.h3}>Smartees </h3>
        <p className={classes.name}>Full Sleeve Printed Men Sweatshirt</p>
        <p className={classes.price}>Special price</p>

        <div>
          <span className={classes.span1}>Rs.399</span>
          <span className={classes.span2}>Rs.1499</span>
          <span className={classes.span3}>73% off</span>
        </div>
        <div className={classes.ratingDiv}>
          <span className={classes.rating}>
            4
            <img src="/images/star.png" alt="" />
          </span>
          <span className={classes.count}>
            12,744 ratings and 1,459 reviews
          </span>
        </div>
        <div className={classes.offers}>Available offers</div>
        <div className={classes.tag}>
          <img src="/images/tag.png" alt="" />
          <span>
            Special PriceGet extra 20% off (price inclusive of cashback/coupon)
          </span>
        </div>
        <div className={classes.tag}>
          <img src="/images/tag.png" alt="" />
          <span>
            Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift
            Card worth upto ₹1000*
          </span>
        </div>
        <div className={classes.tag}>
          <img src="/images/tag.png" alt="" />
          <span>Bank Offer5% Cashback on Flipkart Axis Bank Card</span>
        </div>
        <div className={classes.deliver}>
          <img src="/images/map.png" alt="" />
          Deliver To
        </div>
        <div className={classes.check}>
          <span>Enter delivery Pincode</span>{" "}
          <span className={classes.check2}>Check</span>
        </div>
        <div className={classes.ratingHeading}>
          <hr />
          <div className={classes.ratingHeading1}>Product Details</div>
          <hr />
        </div>
        <div className={classes.ratingHeading2}>
          <span className={classes.countHeading}>Ratings & Reviews</span>
          <span className={classes.rating}>
            4
            <img src="/images/star.png" alt="" />
          </span>
          <span className={classes.count}>
            12,744 ratings and 1,459 reviews
          </span>
          <button className={classes.rateButton}>Rate Product</button>
        </div>
        <div className={classes.ratingHeading1}> what our customers felt:</div>
        <div className={classes.reviewButtons}>
          <button>Fabric Quality</button>
          <button>colour</button>
          <button>style</button>
          <button>comfort</button>
          <button>size</button>
          <button>stitching Quality</button>
          <button>keeps warm</button>
        </div>
        <div className={classes.reviewStyle}>
          <span className={classes.rating}>
            5
            <img src="/images/star.png" alt="" />
          </span>
          <span className={classes.count}>Very Nice Product!</span>
          <div className={classes.reviewImages}>
            <img src="/images/t1.webp" alt="" />
            <img src="/images/t2.webp" alt="" />
            <img src="/images/t3.webp" alt="" />
          </div>
          <div>Customer,Bangalore</div>
        </div>
        <div className={classes.reviewStyle}>
          <span className={classes.rating}>
            4
            <img src="/images/star.png" alt="" />
          </span>
          <span className={classes.count}>Good</span>
          <div className={classes.reviewImages}>
            <img src="/images/t1.webp" alt="" />
            <img src="/images/t2.webp" alt="" />
            <img src="/images/t3.webp" alt="" />
          </div>
          <div>Customer,Chennai</div>
        </div>
      </div>
    </div>
  );
};

export default ImageReview;
