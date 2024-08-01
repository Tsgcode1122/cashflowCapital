import React from "react";
import styled from "styled-components";
import user from "../Images/user.png";
import bg from "../Images/darkb.png";
import s1 from "../Images/s1.png";
import s2 from "../Images/s3.png";
import s3 from "../Images/s2.png";
import GlowingDivider from "./GlowingDivider";
import { TrophyOutlined, UserOutlined, RiseOutlined } from "@ant-design/icons";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
`;

const Contents = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 40px 0;

  width: 100%;
`;

const Header = styled.h1`
  text-align: center;
  color: #0d9efa;
  font-weight: 700;

  padding: 20px 80px 0 80px;
  position: relative;
  @media screen and (max-width: 320px) {
    padding: 20px 40px 0 40px;
    font-weight: 500;
    font-size: 1.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-weight: 600;
    font-size: 2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-weight: 600;
    font-size: 2rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 320px) {
    padding: 0.5rem 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0.5rem 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.5rem 1rem;
  }
`;
const Carder = styled.div`
  width: 90%;
  margin-left: 20px;
`;
const Card = styled.div`
  background: linear-gradient(90deg, #1291ed 0%, #413590 80%);
  border-radius: 15px;
  border: 1px solid white;
  padding: 15px 10px;

  max-width: 700px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 15px;

  position: relative;
  @media screen and (max-width: 320px) {
    padding: 10px 8px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;

const IconWrapper = styled.div`
  font-size: 36px;
  color: white;
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, #1291ed 30%, #413590 80%);
  height: 60px;
  display: flex;
  justify-content: center;
  width: 60px;
  border: 2px solid white;
  align-items: center;
  left: -30px;
  z-index: 10;
  img {
    max-width: 100%;
    height: 40px;
  }
  @media screen and (max-width: 320px) {
    font-size: 26px;
    height: 50px;
    width: 50px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 26px;
    height: 55px;
    width: 55px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 26px;
    height: 55px;
    width: 55px;
  }
`;
const Number = styled.div`
  position: absolute;
  color: white;
  font-size: 3.4rem;
  left: -45px;
  top: -25px;
  z-index: 1;
  @media screen and (max-width: 320px) {
    left: -35px;
    top: -18px;
    font-weight: 500;
    font-size: 2.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    left: -32px;
    font-weight: 500;
    top: -15px;
    font-size: 2.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    left: -32px;
    font-weight: 500;
    top: -15px;
    font-size: 2.5rem;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 40px;
  @media screen and (max-width: 320px) {
    padding: 0 10px 0 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 20px 0 30px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 20px 0 30px;
  }
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  @media screen and (max-width: 320px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
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
      <Header>Our Teaching Philosophy</Header>
      <CardContainer>
        <Carder>
          <Card>
            <Number>01</Number>
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
            <Number>02</Number>
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
            <Number>03</Number>
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
