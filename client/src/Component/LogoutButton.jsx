import React from "react";
import styled from "styled-components";
import { useUserData } from "../context/UserDataContext";
import { LogoutOutlined } from "@ant-design/icons";

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
