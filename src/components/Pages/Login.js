import { useState, useRef, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import CartContext from "../../store/CartContext";
import axios from "axios";

import classes from "./Login.module.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCntxt = useContext(AuthContext);
  const cartCntxt = useContext(CartContext);

  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSpzTjcNExN8iLGiCuL3K19dgagjBRG4Q";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSpzTjcNExN8iLGiCuL3K19dgagjBRG4Q";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.message)
              errorMessage = data.error.message;

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCntxt.login(data.idToken);
        history.replace("/store");
        localStorage.setItem("email", enteredEmail);
        let email = localStorage.getItem("email");
        let crudEmail;
        if (email != null) {
          crudEmail = email.replace(/[@.]/g, "");
        }
        axios
          .get(
            `https://crudcrud.com/api/c9b8980b2e6d49d4b8801f6a29d3cda3/cart${crudEmail}`
          )
          .then((response) => {
            const cartItems = [];
            for (let i = 0; i < response.data.length; i++) {
              let item = response.data[i];
              const index = cartItems.findIndex((i) => i.title === item.title);
              if (index == -1) {
                cartItems.push(response.data[i]);
              } else {
                cartItems[index].quantity = cartItems[index].quantity + 1;
              }
            }

            cartCntxt.updateItem(cartItems);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="text" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Loading...</p>}

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
