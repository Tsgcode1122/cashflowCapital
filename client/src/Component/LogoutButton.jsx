import React from "react";
import styled, { keyframes } from "styled-components";
import { useUserData } from "../context/UserDataContext";
import { LogoutOutlined } from "@ant-design/icons";
const skeletonLoading = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0.1;
  }
  50% {
    transform: translateX(100%);
    opacity: 0.2;
  }
  100% {
    transform: translateX(700%);
    opacity: 0.1;
  }
`;
const LogoutButton = () => {
  const userData = useUserData();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      <StyledButton onClick={handleLogout}>
        <LogoutOutlined />
        Logout
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  gap: 5px;
  align-items: center;
  background: none;
  color: white;
  border: none;

  svg {
    color: white !important;
  }
`;

export default LogoutButton;
