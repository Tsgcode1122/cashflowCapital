// src/Component/Layout.js
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import GetStartedButton from "./GetStartedButton";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}
      <Outlet />
      <Footer />
      <GetStartedButton />
    </>
  );
};

export default Layout;
