import React from "react";
import classes from "./Home.module.css";
import image from "../../assets/playButton.png";
const tours = [
  { date: "JUL 16", city: "DETROIT,MI", venue: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL 19", city: "TORONTO,ON", venue: "BUDWEISER STAGE" },
  { date: "JUL 22", city: "BRISTOW,VA", venue: "JIGGY LUBE LIVE" },
  { date: "JUL 29", city: "PHOENIX,AZ", venue: "AK-CHIN PAVILION" },
  { date: "AUG 2", city: "LAS VEGAS,NV", venue: "T-MOBILE ARENA" },
  { date: "AUG 7", city: "CONCORD,CA", venue: "CONCORD PAVILION" },
];

const Home = () => {
  return (
    <div>
      <div className={classes.divHome}>
        <button className={classes.getButton}>Get Our Latest Album</button>
        <br></br>
        <img className={classes.playButton} src={image} />
      </div>
      <h3 className={classes.h3Home}>TOURS</h3>
      <ul className={classes.ulHome}>
        {tours.map((tour) => {
          return (
            <li className={classes.liHome}>
              <span className={classes.date}>{tour.date}</span>
              <span className={classes.city}>{tour.city}</span>
              <span className={classes.venue}>{tour.venue}</span>
              <button className={classes.buttonHome}>Book Tickets</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
