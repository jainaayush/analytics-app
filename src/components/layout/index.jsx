import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// components
import Header from "./header/Header";
import Sidebar from "./sidebar/index";
import RouteApp from "./route/RouteApp";

const MainPage = () => {
  const location = useLocation();
  const [title, setTitle] = useState("home");

  useLayoutEffect(() => {
    console.log("location-0000",location.pathname) 
    if(location.pathname === "/") {
      setTitle("Home")
    } else if(location.pathname === "/inventory") {
      setTitle("Inventory")
    } else if(location.pathname === "/retailer-full-product") {
      setTitle("Retailer full product")
    } else if(location.pathname === "/keg-availability") {
      setTitle("Keg Availability")
    } else if(location.pathname === "/product-availability") {
      setTitle("Product Availability")
    }
   }, [location]);
  
  return (
    <>
      <section>
        <Header title={title} />
      </section>
      {/* sidebar section */}
      <section className="d-flex">
        <Sidebar />
        <RouteApp />
      </section>
    </>
  );
};

export default MainPage;
