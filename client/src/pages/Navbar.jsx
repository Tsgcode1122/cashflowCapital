import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  MenuOutlined,
  TrophyOutlined,
  DollarOutlined,
  MailOutlined,
  FormOutlined,
  BellOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import LeadershipBoard from "../DashboardModal/LeadershipBoard";

const { SubMenu } = Menu;

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <StyledNavbar style={{ top: visible ? 0 : "-5rem" }}>
        <Inner>
          <NotificationCount>...</NotificationCount>
          <BellOutlined style={{ fontSize: "24px", color: "#000000" }} />
        </Inner>
        <MenuToggle onClick={toggleSidebar}>
          <MenuOutlined />
        </MenuToggle>
      </StyledNavbar>
      <NavHeight></NavHeight>
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef}>
        <SidebarContent>
          <Menu mode="inline" defaultSelectedKeys={["0"]} theme="light">
            <Menu.Item key="0" icon={<FormOutlined />}>
              <Link to="/admin" onClick={closeSidebar}>
                Overview
              </Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<MailOutlined />}>
              <Link to="/admin/request" onClick={closeSidebar}>
                Users Requests
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
              <Link to="/admin/registered-users" onClick={closeSidebar}>
                Registered Users
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<TrophyOutlined />}>
              <Link to="/admin/leadership" onClick={closeSidebar}>
                Leadership Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<DollarOutlined />}>
              <Link to="/admin/withdrawals" onClick={closeSidebar}>
                Withdrawals
              </Link>
            </Menu.Item>
          </Menu>
        </SidebarContent>
      </Sidebar>
      {isSidebarOpen && <Overlay onClick={closeSidebar} />}
    </>
  );
};
const NavHeight = styled.div`
  height: 3rem;
`;
// Styled components
const Inner = styled.div`
  position: relative;
`;

const NotificationCount = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 4px;
`;
const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  right: 0;
  height: 3rem;
  gap: 20px;
  margin: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 1px 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
`;

const MenuToggle = styled.div`
  margin: 0;
  cursor: pointer;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  border-radius: 0 20px 20px 0;
  border-right: 0.5px solid #313538;
  transition: left 0.5s ease-in-out;
  z-index: 1000; /* Ensure Sidebar is on top */
  overflow-x: hidden;
`;

const SidebarContent = styled.div`
  padding: 10px;
  padding-top: 3rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998; /* Ensure Overlay is below Sidebar */
`;

export default Navbar;
