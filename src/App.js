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
import ProductDetail from "./components/Products/ProductDetail";

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
      <CartProvider>
        <Route path="/store" exact>
          {cartIsShown && <Cart onHideCart={hidecartHandler} />}

          <AvailableProducts />
          <Footer />
        </Route>
      </CartProvider>
      <Route path="/about">
        <About />
        <Footer />
      </Route>
      <Route path="/home">
        <Home />
        <Footer />
      </Route>
      <Route path="/contact">
        <ContactDetails />
        <Footer />
      </Route>
      <Route path="/store/:productId" exact>
        <ProductDetail />
      </Route>
    </>
  );
}

export default App;
