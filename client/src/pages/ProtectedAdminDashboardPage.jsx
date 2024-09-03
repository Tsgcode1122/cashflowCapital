import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spin, Result, Button } from "antd";
import styled, { keyframes } from "styled-components";
import { useUserData } from "../context/UserDataContext";
import AdminRoutes from "./AdminRoutes";

const StyledResult = styled(Result)`
  .ant-result-title {
    color: white !important;
  }
  .ant-result-subtitle {
    color: white !important;
  }
`;

const ProtectedAdminDashboardPage = () => {
  const navigate = useNavigate();
  const { userData } = useUserData();
  const userId = userData ? userData._id : null;

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const response = await axios.get(
          `https://cashflowcapital.onrender.com/api/auth/${userId}`,
        );
        setIsAdmin(response.data.isAdmin);
      } catch (error) {
        console.error("Error checking admin status:", error);

        navigate("/");
      }
    };

    if (userData && userId) {
      checkAdminStatus();
    }
  }, [userData, navigate]);

  if (isAdmin === false) {
    return (
      <StyledResult
        status="403"
        title="403 Forbidden"
        subTitle="Oops! You are not authorized to access this page."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
      />
    );
  }

  return <AdminRoutes />;
};

export default ProtectedAdminDashboardPage;
