import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  WhatsAppOutlined,
  SendOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { FaDiscord, FaTwitter } from "react-icons/fa";

import logo from "../Images/CashLogo.png";
const Footer = () => {
  return (
    <>
      <Container>
        <Bigger>
          <div>
            <Link to="/">
              <Logo src={logo} alt="Logo" />
            </Link>
            <Intro>
              Cashflow Capital provides expert trading signals, comprehensive
              training, and valuable insights to help you succeed in the
              financial markets. Subscribe today and start trading smarter.
            </Intro>
          </div>
          <Big>
            <div>
              <SubHead>Quick Links</SubHead>
              <Split>
                <Split1>
                  <Link to="/">Home</Link>
                  <Link to="/aboutUs">About us</Link>
                  <Link to="https://calendly.com/cashflowcapital-info/free-30-minutes-consultation">
                    Book a Call
                  </Link>
                  <Link to="/offer">Offer</Link>
                  <Link to="/faqs">FAQS</Link>
                </Split1>
                <Split2>
                  <Link to="/terms">Terms & Conditions</Link>
                  <Link to="/Policy">Privacy Policy</Link>
                  <Link to="/subscription">Subscription</Link>
                  <Link to="/user-dashboard">Dashboard</Link>
                  <Link to="/login">Login/SignUp</Link>
                </Split2>
              </Split>
            </div>
            <Socials>
              <SubHead>Contact us</SubHead>

              <Mail>
                {" "}
                <ContactText href="mailto:cashflowcapital.info@gmail.com">
                  cashflowcapital.info@gmail.com
                </ContactText>
              </Mail>
              <Contact>
                <ContactText href="https://wa.me/+2347036848713">
                  <WhatsAppOutlined
                    style={{ fontSize: "24px", color: "#ffffff" }}
                  />
                </ContactText>
                <ContactText href="https://t.me/Tradewithtgbanks">
                  <SendOutlined
                    style={{ fontSize: "24px", color: "#ffffff" }}
                  />
                </ContactText>
                <ContactText href="https://twitter.com/Cashflow_HQ">
                  <TwitterOutlined
                    style={{ fontSize: "24px", color: "#ffffff" }}
                  />
                </ContactText>
                <ContactText href="https://discord.gg/invitecode">
                  <FaDiscord style={{ fontSize: "24px", color: "#ffffff" }} />
                </ContactText>
              </Contact>
            </Socials>
          </Big>
        </Bigger>
        <End>© 2024 CashflowCapital / All rights reserved</End>
      </Container>
    </>
  );
};

export default Footer;

const Mail = styled.h3`
  color: #e6e6e6;
  font-weight: 200;
  margin: 0;
  @media screen and (min-width: 800px) {
    font-size: 16px;
  }
`;
const SubHead = styled.h3`
  color: #e6e6e6;
  font-weight: 600;
  margin: 0;
  padding: 30px 0 20px 0;
  @media screen and (min-width: 1000px) {
    padding: 0px 0 20px 0;
  }
`;
const Intro = styled.p`
  color: #b3b3b3;
  font-weight: 200;
`;
const Logo = styled.img`
  max-width: 100%;
  height: 3rem;
`;
const Split = styled.div`
  display: flex;
  color: #b3b3b3;
  gap: 100px;
  a {
    text-decoration: none;
    color: #b3b3b3 !important;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: #ffffff !important;
      transform: translateX(5px);
    }
  }
  @media screen and (max-width: 320px) {
    gap: 60px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    gap: 70px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    gap: 80px;
  }
  @media screen and (min-width: 1000px) {
    gap: 20px;
  }
`;
const Split1 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  a {
    @media screen and (min-width: 1000px) {
      min-width: 100px;
    }

    text-decoration: none;
    color: white;
  }
`;
const Split2 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  a {
    @media screen and (min-width: 1000px) {
      min-width: 200px;
    }

    text-decoration: none;
    color: white;
  }
`;

const Socials = styled.div``;
const ContactText = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: #ffffff !important;
    transform: scale(1.2);
  }
`;
const End = styled.div`
  text-align: center;
  padding: 10px 0;

  border-top: 0.3px solid #bababa;
`;
const Contact = styled.div`
  display: flex;
  padding: 40px 0;
  gap: 30px;
  flex-wrap: wrap;
  /* border-bottom: 0.3px solid #bababa; */
`;
const Container = styled.div`
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #08122a;
  padding: 2rem;
  color: white;
  @media screen and (min-width: 800px) {
    padding: 2rem 4rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 2rem 6rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 9rem;
  }
`;
const Big = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 0 0 2rem 0;
  }
  @media screen and (min-width: 1000px) {
    gap: 10px;
  }
`;
const Bigger = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
`;
