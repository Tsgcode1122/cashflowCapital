import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import {
  MailOutlined,
  WhatsAppOutlined,
  SendOutlined,
  HomeOutlined,
  GiftOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import logo from "../Images/CashLogo.png";
import Ham from "../Images/ham.png";
import logoicon from "../Images/loi.png";
import WorkInProgress from "./WorkInProgress";
import { useUserData } from "../context/UserDataContext";
import ProfileModal from "../pages/ProfileModal";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const sidebarRef = useRef(null);
  const { userData } = useUserData();
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
  const handleProfileClick = () => {
    setModalVisible(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <StyledNavbar style={{ top: visible ? 0 : "-5rem" }}>
        <HeadSpace>
          <Space>
            <MenuToggle onClick={toggleSidebar}>
              <img src={Ham} alt="Menu Icon" />
            </MenuToggle>
            <img src={logo} alt="Logo" />
          </Space>
          <Login>
            {userData ? (
              <LogoutButton />
            ) : (
              <StyledLink to="/login">
                <LoginOutlined />
                Login
              </StyledLink>
            )}
          </Login>
        </HeadSpace>
      </StyledNavbar>
      <NavHeight></NavHeight>
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef}>
        <CloseIcon onClick={toggleSidebar}>X</CloseIcon>
        {/* <WorkInProgress /> */}
        <SidebarContent>
          <LinkContainer>
            <Link to="/" onClick={closeSidebar}>
              <HomeOutlined />
              <span>Home</span>
            </Link>
            <Link to="/offer" onClick={closeSidebar}>
              <GiftOutlined />
              <span>Offer</span>
            </Link>
            <Link to="/subscription" onClick={closeSidebar}>
              <CreditCardOutlined />
              <span>Subscriptions</span>
            </Link>

            <Link to="/user-dashboard" onClick={closeSidebar}>
              <DashboardOutlined />
              <span>Dashboard</span>
            </Link>
          </LinkContainer>
          <Contact>
            <h3>Contact Us</h3>
            <div>
              <ContactItem>
                <MailOutlined style={{ marginRight: 8 }} />
                <ContactText href="mailto:cashflowcaptital@gmail.com">
                  cashflowcaptital@gmail.com
                </ContactText>
              </ContactItem>
              <ContactItem>
                <WhatsAppOutlined style={{ marginRight: 8 }} />
                <ContactText href="https://wa.me/your_whatsapp_number">
                  +23456789
                </ContactText>
              </ContactItem>
              <ContactItem>
                <SendOutlined style={{ marginRight: 8 }} />
                <ContactText href="https://t.me/your_telegram_username">
                  +23456789333
                </ContactText>
              </ContactItem>
            </div>
          </Contact>
        </SidebarContent>
      </Sidebar>
      <ProfileModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      {isSidebarOpen && <Overlay onClick={closeSidebar} />}
    </>
  );
};

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 5px;
  margin-bottom: 10px;
`;
const Contact = styled.div`
  padding: 20px 0 40px 20px;
  display: flex;
  background-color: #f0f0f0;
  flex-direction: column;
  border-radius: 5px;
  div {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
`;

const LogoIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
const ContactItem = styled.span`
  display: flex;
  align-items: left;
  /* flex-direction: column; */
  margin-bottom: 5px;
`;

const ContactText = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 15px !important;
  &:hover {
    text-decoration: underline;
  }
`;
const NavHeight = styled.div`
  height: 3rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  gap: 5px;
  svg {
    color: ${({ active }) => (active ? "white" : "white")};
  }
`;

const Login = styled.div``;
const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #0e161c;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
  img {
    max-width: 100%;
    height: 40px;
  }
`;

const Space = styled.div`
  align-items: center;
  display: flex;

  gap: 20px;
`;
const HeadSpace = styled.div`
  align-items: center;
  display: flex;
  margin: 5px 20px;
  justify-content: space-between;
`;

const MenuToggle = styled.div`
  margin: 0;
  cursor: pointer;
  img {
    max-width: 100%;
    height: 40px;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  border-radius: 20px 0 0 20px;
  border-left: 0.5px solid #313538;
  transition: right 0.5s ease-in-out;
  z-index: 1000;
  overflow-x: hidden;
`;

const SidebarContent = styled.div`
  padding: 10px;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  a {
    text-decoration: none;
    font-size: 18px;
    color: black;
    align-items: center;
    background: #f6f6f6;
    border-radius: 10px;

    padding: 8px;
    display: flex;

    gap: 20px;
    img {
      max-width: 100%;
      height: 25px;
    }
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export default Navbar;
