import React from "react";
import styled from "styled-components";
import user from "../Images/buffett.png";
import bg from "../Images/darkb.png";
import GlowingDivider from "./GlowingDivider";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    max-width: 100%;
    width: 70%;
    margin-bottom: 10px;
  }
`;

const Header = styled.h1`
  color: #0d9efa;
  font-weight: 500;
  margin-bottom: 40px;
  @media screen and (max-width: 320px) {
    font-size: 18px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 22px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 24px;
  }
`;
const SubHeading = styled.p`
  font-size: 1rem;
  font-weight: 100;
  padding: 0 80px;
  span {
    font-weight: bold;
  }
  @media screen and (max-width: 320px) {
    padding: 0 30px;
    font-size: 0.7rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 60px;
    font-size: 0.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 60px;
    font-size: 0.8rem;
  }
`;
const Buffet = () => (
  <Container>
    <Contents>
      <SubHeading>
        Our Goal at <span>CASHFLOW CAPITAL</span> is to help teach you how to
        make money work for you
        <span> even while you sleep!</span>
      </SubHeading>
      <img src={user} />
    </Contents>
  </Container>
);

export default Buffet;
