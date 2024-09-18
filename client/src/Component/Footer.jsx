import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  WhatsAppOutlined,
  SendOutlined,
} from "@ant-design/icons";
import logo from "../Images/CashLogo.png";
const Footer = () => {
  return (
    <Container>
      {/* <div>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
      </div>
      <Contact>
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
      </Contact>
      <QuickLink>
        <Link to="/">Home</Link>
        <Link to="/offer">Offers</Link>
        <Link to="/subscription">Subscriptions</Link>
        <Link to="/user-dashboard">Dashboard</Link>
      </QuickLink> */}
      <End>© 2024 CashflowCapital / All rights reserved</End>
    </Container>
  );
};

export default Footer;

const Logo = styled.img`
  max-width: 100%;
  height: 3rem;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 20px;
  border-radius: 10px;
  box-shadow:
    rgba(62, 53, 53, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;
const QuickLink = styled.div``;
const ContactText = styled.div``;
const End = styled.div`
  text-align: center;
  padding: 10px 0;
  border-top: 0.3px solid #bababa;
`;
const Contact = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 20px;
  flex-wrap: wrap;
  border-bottom: 0.3px solid #bababa;
`;
const Container = styled.div`
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #0e161c;
  padding: 2rem;
  color: white;
`;
