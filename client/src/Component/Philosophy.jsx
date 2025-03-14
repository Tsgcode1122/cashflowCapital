import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import user from "../Images/user.png";
import bg from "../Images/LineBg.png";
import s1 from "../Images2025/helphand.png";
import s2 from "../Images2025/win.png";
import s3 from "../Images2025/moving.png";

import { TrophyOutlined, UserOutlined, RiseOutlined } from "@ant-design/icons";
import Heading from "./Heading";
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
const Container = styled.div`
  background-color: #121933 !important;
  background-size: cover;
  color: white;
`;

const Contents = styled.div`
  text-align: center;
  @media screen and (max-width: 850px) {
    background: url(${bg}) no-repeat center center;
    background-size: cover;
  }
  padding: 20px 0;

  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 320px) {
    padding: 0.5rem 0.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0.5rem 0.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.5rem 0.5rem;
  }
`;
const Carder = styled.div``;
const Card = styled.div`
  border-radius: 15px;

  padding: 15px 10px;

  max-width: 700px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  position: relative;
  @media screen and (max-width: 320px) {
    padding: 10px 8px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 10px 8px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 10px 8px;
  }
`;

const IconWrapper = styled.div`
  font-size: 36px;
  color: white;

  border-radius: 10px;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
  img {
    max-width: 100%;
    height: 100px;
    @media screen and (max-width: 320px) {
      height: 80px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 80px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 80px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardTitle = styled.h3`
  color: #0d9efa;
  font-size: 18px;
  font-weight: 800;
  margin: 0;
  @media screen and (max-width: 320px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 15px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 15px;
  }
`;

const CardText = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 200;
  margin: 0;
  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 12px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 12px;
  }
`;
const Philosophy = () => (
  <Container>
    <Contents>
      <Heading>
        Our Teaching{" "}
        <span
          style={{
            display: "inline-block",
            background:
              "linear-gradient(90deg, transparent, transparent, transparent, #0c364f, #0d9efa)",
            paddingRight: "10px",
            borderRadius: "5px ",
          }}
        >
          Philosophy
        </span>
      </Heading>

      <CardContainer>
        <Carder>
          <Card>
            {/* <Number>01</Number> */}
            <IconWrapper>
              <img src={s1} />
            </IconWrapper>
            <ContentWrapper>
              <CardTitle>Get Hands-by-Hands Guidance</CardTitle>
              <CardText>
                Get held hands-by-hands by our seasoned expert mentors and get
                to learn all about the financial markets from a professional
                view.
              </CardText>
            </ContentWrapper>
          </Card>
        </Carder>
        <Carder>
          <Card>
            {/* <Number>02</Number> */}
            <IconWrapper>
              <img src={s2} />
            </IconWrapper>
            <ContentWrapper>
              <CardTitle>Become an Independent Trader</CardTitle>
              <CardText>
                Unlike other similar groups, we don't just hand you copy-paste
                signals, we help to build you as an independent trader while you
                earn.
              </CardText>
            </ContentWrapper>
          </Card>
        </Carder>
        <Carder>
          <Card>
            {/* <Number>03</Number> */}
            <IconWrapper>
              <img src={s3} />
            </IconWrapper>
            <ContentWrapper>
              <CardTitle>Scale up to $500 - $10k/Month</CardTitle>
              <CardText>
                Learn to scale up to $500 - $10,000/monthly as fast as possible
                with our expert mentors guidance.
              </CardText>
            </ContentWrapper>
          </Card>
        </Carder>
      </CardContainer>
    </Contents>
  </Container>
);

export default Philosophy;
