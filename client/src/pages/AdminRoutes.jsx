// AdminRoutes.js
import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { Result, Button } from "antd";
import styled, { createGlobalStyle } from "styled-components";

import RegisterUsers from "./RegisterUsers";
import Overview from "./Overview";
import Navbar from "./Navbar";
import LeadershipBoard from "../DashboardModal/LeadershipBoard";
import UserWithdrawals from "./UserWithdrawals";
import UserRequestPage from "./UserRequestPage";

const AdminRoutes = () => {
  return (
    <>
      <GlobalStyle />
      <IrregularCircle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />

        {/* <Route path="/customers-Requests" element={<CustomerRequests />} /> */}
        <Route path="/registered-users" element={<RegisterUsers />} />
        <Route path="/leadership" element={<LeadershipBoard />} />
        <Route path="/withdrawals" element={<UserWithdrawals />} />
        <Route path="/request" element={<UserRequestPage />} />

        <Route path="*" element={<InvalidPath />} />
      </Routes>
    </>
  );
};
const InvalidPath = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/admin");
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
const GlobalStyle = createGlobalStyle`
  body {
    background: #EDF1F6; /* Set linear gradient background with blue and red colors */
    margin: 0; /* Remove default body margin */
    padding: 0; /* Remove default body padding */
    font-family: 'Roboto', sans-serif;
 
  }
`;

// Create a styled component for the irregular circle shape
const IrregularCircle = styled.div`
  width: 100%;
  height: 450px;
  z-index: -1;
  position: absolute;
  clip-path: ellipse(100% 60% at 70% 0%);
  background: rgb(37, 71, 106);
  background: linear-gradient(
    90deg,
    rgba(37, 71, 106, 1) 0%,
    rgba(46, 74, 102, 1) 20%,
    rgba(67, 94, 122, 1) 53%,
    rgba(74, 110, 147, 1) 80%,
    rgba(68, 92, 117, 1) 100%
  );
`;

export default AdminRoutes;
