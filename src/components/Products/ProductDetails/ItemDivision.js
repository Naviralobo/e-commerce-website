import React from "react";
import classes from "./ItemDivision.module.css";
const ItemDivision = () => {
  return (
    <div className={classes.itemDivision}>
      <div className={classes.dropDown}>
        <button>Electronics</button>
        <div className={classes.dropDownContent}>
          <span>Fridge</span>
          <span>AC</span>
          <span>Grinder</span>
        </div>
      </div>
      <div className={classes.dropDown}>
        <button>TV&Appliances</button>
        <div className={classes.dropDownContent}>
          <span>Remote</span>
          <span>TV Shelf</span>
          <span>LED Tv</span>
        </div>
      </div>
      <div className={classes.dropDown}>
        <button>Men</button>
        <div className={classes.dropDownContent}>
          <span>Shirts</span>
          <span>Jeans</span>
          <span>Shoes</span>
        </div>
      </div>
      <div className={classes.dropDown}>
        <button>Women</button>
        <div className={classes.dropDownContent}>
          <span>Western</span>
          <span>Traditional</span>
          <span>Bags</span>
        </div>
      </div>
      <div className={classes.dropDown}>
        <button>Home & Furniture</button>
        <div className={classes.dropDownContent}>
          <span>notifications</span>
          <span>customer care</span>
          <span>advertise</span>
        </div>
      </div>
      <div className={classes.dropDown}>
        <button>sports,books & more</button>
        <div className={classes.dropDownContent}>
          <span>Balls</span>
          <span>Stories</span>
          <span>Helmet</span>
        </div>
      </div>
      <div className={classes.dropDown}>
        <button>Baby&kids</button>
        <div className={classes.dropDownContent}>
          <span>Toys</span>
          <span>Essentials</span>
          <span>Dress</span>
        </div>
      </div>
      <div className={classes.dropDown}>
        <button>Flights</button>
      </div>
      <div className={classes.dropDown}>
        <button>Offer zone</button>
      </div>
    </div>
  );
};

export default ItemDivision;
