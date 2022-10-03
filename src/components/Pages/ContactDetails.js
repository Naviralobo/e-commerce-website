import React, { useRef } from "react";
import classes from "./ContactDetails.module.css";

const ContactDetails = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  const addContactHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const phone = phoneInputRef.current.value;
    const details = {
      name: name,
      email: email,
      phone: phone,
    };
    // console.log(details);
    addToCart(details);
  };
  async function addToCart(details) {
    const response = await fetch(
      "https://movie-app-7fa49-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <div>
      <h1>The Generics</h1>
      <div className={classes.form}>
        <form onSubmit={addContactHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" ref={emailInputRef} />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="text" ref={phoneInputRef} />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactDetails;
