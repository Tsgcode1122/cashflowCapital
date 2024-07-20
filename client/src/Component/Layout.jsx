// src/Component/Layout.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import GetStartedButton from "./GetStartedButton";

const Layout = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}
      <Outlet />
      <GetStartedButton />
    </>
  );
};

export default Layout;
