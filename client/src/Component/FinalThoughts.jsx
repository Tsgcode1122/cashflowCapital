import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "antd";
import bg from "../Images/darkb.png";
import laptop from "../Images/world.png";
import arrow from "../Images/giftbox.png";

import bgg from "../Images/Green2.png";
import BButton from "./BButton";
import SwipeComponent from "./SwipeComponent";
import ProgressBar from "./ProgressBar";
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
  align-items: center;
  justify-content: center;

  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
`;
const Content = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 40px 0 1rem 0;
  display: flex;

  flex-direction: column;
  align-items: center;
`;
const NewBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-size: cover;
  color: white;
  padding: 40px 20px 0px 20px;
  position: relative;
  @media screen and (max-width: 320px) {
    background-position: 50% center;
  }
`;
const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0 !important;
  line-height: 1;
  color: #0d9efa;
  @media screen and (max-width: 320px) {
    font-size: 1.4rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.6rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.6rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 80px;
  span {
    font-weight: bold;
  }
  @media screen and (max-width: 320px) {
    padding: 0 20px;
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 20px;
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 20px;
    font-size: 1.1rem;
  }
`;
const Laptop = styled.div`
  margin-top: 0px;

  img {
    max-width: 100%;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));

    height: 200px;

    @media screen and (max-width: 320px) {
      height: 160px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 180px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 180px;
    }
  }
`;

const Percentage = styled.div`
  height: 8px;
  width: 100%;
  border-radius: 10px;
  background-color: gray;
  &::before {
    content: "";
    position: absolute;
    background-color: #4ea3f6;
    height: 8px;
    left: 0;
    width: 95%;
    background-color: #4ea3f6;
  }
`;
const StyledPP = styled.p`
  padding: 0 2rem;
  color: white;

  span {
    font-weight: 800;
  }
  font-size: 1rem;
  font-weight: 200;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.85rem;
  }
`;
const Styledp = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;
const FinalThoughts = () => {
  return (
    <Container>
      <Content>
        <NewBg>
          <Heading>Satisfactory Guarantee </Heading>
          <SwipeComponent direction="left-to-right">
            <SubHeading>
              We
              <span> Guarantee</span> you make back your money in 29 working
              days or we get your money back
            </SubHeading>
          </SwipeComponent>

          <Laptop>
            <img
              src={laptop}
              className="animate__animated animate__headShake animate__slower animate__infinite"
            />
          </Laptop>

          <Styledp>
            Our Price will Increase After <br />
            1,000 Members Reached.
          </Styledp>
          <StyledPP>
            Our Price will Increase wehn we achieve our total students goals
          </StyledPP>
        </NewBg>
        <Styledp> 95% Complete</Styledp>
        <ProgressBar />
      </Content>
    </Container>
  );
};

export default FinalThoughts;
