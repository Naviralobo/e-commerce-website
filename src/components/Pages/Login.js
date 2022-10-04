import React, { useRef, useContext, useState } from "react";
import classes from "./Login.module.css";
import AuthContext from "../../store/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [isLogIn, setIsLogin] = useState(false);
  const authCntxt = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // console.log(enteredEmail, enteredPassword);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSpzTjcNExN8iLGiCuL3K19dgagjBRG4Q",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
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
        setIsLogin(true);
        authCntxt.login(data.idToken);
        history.replace("/store");
        console.log(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const logoutHandler = () => {
    authCntxt.logout();
  };

  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
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
          {!isLogIn && <button type="submit">Login</button>}
          {isLogIn && (
            <button type="button" onClick={logoutHandler}>
              Logout
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Login;
