// src/App.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";
import CustomerProfilePage from "./pages/CustomerProfilePage";
import { Result, Button } from "antd";
import ProtectedAdminDashboardPage from "./pages/ProtectedAdminDashboardPage";
import OfferPage from "./pages/OfferPage";
import SubscriptionPage from "./pages/SubscriptionPage";

// Global styles
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

// Component for handling invalid paths
const InvalidPath = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <Result
      status="404"
      title="404 Not Found"
      subTitle="Oops! The page you are looking for does not exist."
      extra={
        <Button type="primary" onClick={handleBackHome}>
          Back Home
        </Button>
      }
    />
  );
};

// Define your routes
const routes = [
  {
    element: <Layout />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "register/:referralId", element: <RegisterPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "reset-password", element: <ResetPasswordPage /> },
      { path: "user-dashboard", element: <UserDashboard /> },
      { path: "offer", element: <OfferPage /> },
      { path: "subscription", element: <SubscriptionPage /> },
      { path: "customer-profile", element: <CustomerProfilePage /> },
      { path: "*", element: <InvalidPath /> },
      { path: "/admin/*", element: <ProtectedAdminDashboardPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

export default App;
