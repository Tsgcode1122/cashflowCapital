import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import user from "../Images/buffett.png";
import bg from "../Images/LineBg.png";
import GlowingDivider from "./GlowingDivider";
import bgg from "../Images/downmoney.png";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    background: url(${bg}) no-repeat center center;
    background-size: cover;
  }
  color: white;
  overflow: hidden;
`;

const Contents = styled.div`
  text-align: center;

  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
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
  font-weight: 400;
  padding: 0 80px;
  span {
    font-weight: bold;
    color: #0d9efa;
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
const Span = styled.div`
  font-weight: bold;
`;
const Imm = styled.div`
  position: absolute;
  right: 0px;
  height: 120px;

  margin-bottom: -18rem;
  img {
    max-width: 100%;
    height: 100%;
  }
`;
const Buffet = () => (
  <Container>
    <Contents>
      <SubHeading>
        Our Goal at <span>CASHFLOW CAPITAL</span> is to help teach you how to
        make money work for you
        <Span> even while you sleep!</Span>
      </SubHeading>
      <img src={user} />
      {/* <Imm>
        <img src={bgg} />
      </Imm> */}
    </Contents>
  </Container>
);

export default Buffet;
