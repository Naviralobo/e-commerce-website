import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AvailableProducts from "./components/Products/AvailbleProducts";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import ContactDetails from "./components/Pages/ContactDetails";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hidecartHandler = () => {
    setCartIsShown(false);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  return (
    <>
      <Header onShowCart={showCartHandler} />
      <Footer />
      <CartProvider>
        <Route path="/store">
          {cartIsShown && <Cart onHideCart={hidecartHandler} />}

          <AvailableProducts />
        </Route>
      </CartProvider>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/contact">
        <ContactDetails />
      </Route>
    </>
  );
}

export default App;
