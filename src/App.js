import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AvailableProducts from "./components/Products/AvailbleProducts";

function App() {
  return (
    <Fragment>
      <Header />
      <AvailableProducts />
      <Footer />
    </Fragment>
  );
}

export default App;
