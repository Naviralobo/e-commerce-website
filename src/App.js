import React, { useState, useContext, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AvailableProducts from "./components/Products/AvailbleProducts";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AuthContext from "./store/AuthContext";
// import About from "./components/Pages/About";
// import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
// import ContactDetails from "./components/Pages/ContactDetails";
import ProductDetail from "./components/Products/ProductDetail";

const Home = React.lazy(() => import("./components/Pages/Home"));
const About = React.lazy(() => import("./components/Pages/About"));
const ContactDetails = React.lazy(() =>
  import("./components/Pages/ContactDetails")
);
function App() {
  const authCntxt = useContext(AuthContext);

  const [cartIsShown, setCartIsShown] = useState(false);

  const hidecartHandler = () => {
    setCartIsShown(false);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  return (
    <Suspense fallback={<div>Page is Loading...</div>}>
      <CartProvider>
        <Header onShowCart={showCartHandler} />

        {!authCntxt.isLoggedIn && (
          <Route path="/store" exact>
            <Redirect to="/login" />
          </Route>
        )}

        {authCntxt.isLoggedIn && (
          <Route path="/store" exact>
            {cartIsShown && <Cart onHideCart={hidecartHandler} />}
            <AvailableProducts />
            {/* <Footer /> */}
          </Route>
        )}

        <Route path="/login">
          <Login />
          {/* <Footer /> */}
        </Route>

        <Route path="/store/:product" exact>
          <ProductDetail />
        </Route>

        <Route path="/about">
          <About />
          {/* <Footer /> */}
        </Route>

        <Route path="/home">
          <Home />
          {/* <Footer /> */}
        </Route>

        <Route path="/contact">
          <ContactDetails />
          {/* <Footer /> */}
        </Route>

        <Footer />
      </CartProvider>
    </Suspense>
  );
}

export default App;
