import React, { useContext, useState } from "react";
import CartContext from "./CartContext";
import axios from "axios";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const cartCntxt = useContext(CartContext);
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const email = localStorage.getItem("email");
  let crudEmail;
  if (email != null) {
    crudEmail = email.replace(/[@.]/g, ""); //to remove special characters
  }

  const userIsLoggedIn = !!token; //to convert truthy or falsy valuues to boolean true or false

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
