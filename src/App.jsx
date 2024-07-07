// src/App.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Pages/Home";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #0F1A36, #020B19, #020B19) !important;
    font-family: "Montserrat", sans-serif;
    min-height: 100%;
  }

  body.modal-open {
    overflow: hidden;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
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
