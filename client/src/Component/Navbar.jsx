import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

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
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
          <Two>
            <BookACall
              href="https://calendly.com/yourusername/eventname"
              target="_blank"
            >
              BOOK A CALL
            </BookACall>
            <MenuToggle onClick={toggleSidebar}>
              <img src={Ham} alt="Menu Icon" />
            </MenuToggle>
          </Two>
        </HeadSpace>
      </StyledNavbar>
      <NavHeight></NavHeight>
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef}>
        <Space>
          <Login onClick={closeSidebar}>
            {userData ? (
              <LogoutButton />
            ) : (
              <StyledLink to="/login" onClick={closeSidebar}>
                <LoginOutlined />
                Login
              </StyledLink>
            )}
          </Login>
          <CloseIcon onClick={toggleSidebar}>X</CloseIcon>
        </Space>
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
                <ContactText href="mailto:cashflowcapital.info@gmail.com">
                  cashflowcapital.info@gmail.com
                </ContactText>
              </ContactItem>
              <ContactItem>
                <WhatsAppOutlined style={{ marginRight: 8 }} />
                <ContactText href="https://wa.me/ +2347036848713">
                  +2347036848713
                </ContactText>
              </ContactItem>
              <ContactItem>
                <SendOutlined style={{ marginRight: 8 }} />
                <ContactText href="https://t.me/your_telegram_username">
                  +2347036848713
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
      <BigNav>
        <Space2>
          <div>
            <Link to="/">
              <Logo src={logo} alt="Logo" />
            </Link>
          </div>
          <div>
            <BigLinkContainer>
              <Link to="/">
                <span>Home</span>
              </Link>
              <Link to="/offer">
                <span>Offer</span>
              </Link>
              <Link to="/subscription">
                <span>Subscriptions</span>
              </Link>

              <Link to="/user-dashboard">
                <span>Dashboard</span>
              </Link>
            </BigLinkContainer>
          </div>
          <div>
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
          </div>
        </Space2>
      </BigNav>
    </>
  );
};
const Two = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const BookACall = styled.a`
  background: #379ddd;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-weight: 500;

  text-decoration: none;
`;
// big Nav
const BigNav = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;
  background-color: #0e161c;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
  img {
    max-width: 100%;
    height: 40px;
  }
  @media screen and (max-width: 799px) {
    display: none;
  }
  @media screen and (min-width: 800px) {
    position: fixed;
  }
`;
const Space2 = styled.div`
  padding: 4px 2rem;

  display: flex;

  align-items: center;

  justify-content: space-between;
  @media screen and (min-width: 800px) {
    padding: 4px 4rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 8px 6rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 10px 8rem;
  }
`;
const BigLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  color: white;
  a {
    text-decoration: none;
    &:hover {
      text-decoration-line: underline;
      color: white;
      transform: scale(1.05);
    }
  }
  span {
    color: white !important;
  }
`;
const Logo = styled.img`
  max-width: 100%;
  height: 30px !important;
`;
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
  @media screen and (max-width: 320px) {
    padding: 10px 0 20px 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 15px 0 30px 15px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
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
  @media screen and (max-width: 320px) {
    font-size: 13px !important;
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;
const NavHeight = styled.div`
  height: 3rem;
`;
const Space = styled.div`
  align-items: center;
  background-color: #0e161c !important;
  display: flex;
  height: 3rem;
  padding: 3px 20px;

  color: white !important;
  justify-content: space-between;
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
  @media screen and (max-width: 799px) {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999 !important;
    background-color: #0e161c;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: top 0.3s;
    img {
      max-width: 100%;
      height: 40px;
    }
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
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
  @media screen and (max-width: 320px) {
    width: 250px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 280px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
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
    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 16px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
    }
  }
`;

const CloseIcon = styled.div`
  /* position: absolute; */
  color: white;
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
