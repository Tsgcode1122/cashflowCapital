// src/Component/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import GetStartedButton from "./GetStartedButton";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <GetStartedButton />
    </>
  );
};

export default Layout;
