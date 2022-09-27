import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AvailableProducts from "./components/Products/AvailbleProducts";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hidecartHandler = () => {
    setCartIsShown(false);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hidecartHandler} />}
      <Header onShowCart={showCartHandler} />
      <AvailableProducts />
      <Footer />
    </Fragment>
  );
}

export default App;
