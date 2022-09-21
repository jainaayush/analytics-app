import { React } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../../../pages/Home/index";
import Inventory from "../../../pages/Inventory/index";
import RetailerFullProduct from "../../../pages/RetailerFullProduct/index";
import KegAvailability from "../../../pages/KegAvailability/index";
import ProductAvailability from "../../../pages/ProductAvailability/index";

const RouteApp = () => {
  return (
      <section className="main__contain">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route
            exact
            path="/retailer-full-product"
            element={<RetailerFullProduct />}
          />
          <Route exact path="/keg-availability" element={<KegAvailability />} />
          <Route
            exact
            path="/product-availability"
            element={<ProductAvailability />}
          />
        </Routes>
      </section>
  );
};

export default RouteApp;
