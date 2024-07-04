// src/App.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Pages/Home";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 !important;
    padding: 0 !important;

    font-family: "Montserrat", sans-serif;
  }
  body.modal-open {
    overflow: hidden;
  }
`;

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      { index: true, element: <Home /> },
      // Other routes can be added here
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
