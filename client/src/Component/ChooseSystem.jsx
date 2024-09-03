import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "antd";
import bg from "../Images/darkb.png";
import laptop from "../Images/twophone.png";
import arrow from "../Images/giftbox.png";
import arrows from "../Images/nex.png";
import bgg from "../Images/Green2.png";
import BButton from "./BButton";
import SwipeComponent from "./SwipeComponent";
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
  padding: 40px 0 4rem 0;
  display: flex;

  flex-direction: column;
  align-items: center;
`;
const NewBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bgg}) no-repeat center center;

  background-size: cover;
  color: white;
  padding: 40px 20px 30px 20px;
  position: relative;
  @media screen and (max-width: 320px) {
    background: url(${bgg}) no-repeat contain;
    background-position: 50% center;
  }
`;
const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  padding: 0 2rem;
  margin-bottom: 0 !important;
  line-height: 1;
  color: #0d9efa;
  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 1.2rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0 1.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0 1.5rem;
  }
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  padding: 0 60px;
  span {
    font-weight: bold;
  }
  @media screen and (max-width: 320px) {
    padding: 0 30px;
    font-size: 0.7rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 45px;
    font-size: 0.7rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 45px;
    font-size: 0.8rem;
  }
`;
const Laptop = styled.div`
  margin-top: 0px;
  img {
    max-width: 100%;
    height: 300px;
    @media screen and (max-width: 320px) {
      height: 240px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 220px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 240px;
    }
  }
`;
const ButtonContainer = styled.div`
  margin-top: 1rem;

  @media screen and (max-width: 320px) {
    margin-top: 0.6rem;
  }
`;

const PriceSection = styled.div`
  text-align: center;
  margin-top: 10px;
`;
const Price = styled.div`
  padding: 12px 30px;
  font-size: 1.2rem;
  display: inline-block;

  display: flex;
  align-items: center;
  color: white;
  gap: 10px;
  background-color: #0d9efa;
  border: 1px solid #379ddd;
  border-radius: 25px;
  position: relative;
  overflow: hidden;

  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;

    left: 0; /* Start off-screen */
    width: 40px;
    height: 45px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );

    animation: ${skeletonLoading} 3s infinite linear;
    z-index: 1;
  }
  @media screen and (max-width: 320px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.1rem;
    padding: 10px 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.1rem;
    padding: 10px 20px;
  }
  img {
    /* --animate-duration: 9.5s; */
    max-width: 100%;
    height: 20px;
  }

  &:hover {
    background-color: #121027;
    color: white;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  span {
    text-decoration: line-through;
    color: #f50057;
  }
`;

const Styledp = styled.p`
  span {
    font-weight: 600;
  }
  font-size: 0.9rem;
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
const ChooseSystem = () => {
  return (
    <Container>
      <Content>
        <NewBg>
          <Heading>
            Choose systems that have been proven to be effective{" "}
          </Heading>
          <SwipeComponent direction="left-to-right">
            <SubHeading>
              Learn how to make money from the comfort of your device,
              <span> anywhere around the world.</span>
            </SubHeading>
          </SwipeComponent>

          <Laptop>
            <img
              src={laptop}
              className="animate__animated animate__headShake animate__slower animate__infinite"
            />
          </Laptop>
          <Styledp>
            Join students like you making <span>daily profits...</span>
          </Styledp>
          <PriceSection>
            <Price>
              Join Now <img src={arrows} alt="Arrow" className="" />
            </Price>
          </PriceSection>
        </NewBg>
      </Content>
    </Container>
  );
};

export default ChooseSystem;
