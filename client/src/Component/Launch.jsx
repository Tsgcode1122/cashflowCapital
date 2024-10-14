import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "antd";
import bg from "../Images/LineBg.png";
import payment from "../Images/payment.png";
import payment1 from "../Images/usdc.png";
import payment2 from "../Images/etherium.png";
import payment3 from "../Images/solana.png";
import payment4 from "../Images/bitcoin.png";
import pp1 from "../Images/team3.jpg";
import pp2 from "../Images/pp2.png";
import pp3 from "../Images/pp3.png";
import pp4 from "../Images/pp4.png";
import payment5 from "../Images/credit-card.png";
import user from "../Images/user.png";
import { Link } from "react-router-dom";

import SwipeComponent from "./SwipeComponent";
import Design from "./Design";
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
  @media screen and (max-width: 850px) {
    background: url(${bg}) no-repeat center center;
    background-size: cover;
  }

  color: white;
`;

const CountdownContainer = styled.div`
  text-align: center;
  /* background: rgba(0, 0, 0, 0.4); */
  padding: 40px 20px;
  @media screen and (min-width: 800px) {
    padding: 2rem 4rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  padding: 0 !important;
  margin-bottom: 10px;
  color: white;
  line-height: 1;
  @media screen and (max-width: 320px) {
    font-size: 2rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 4rem;
  }
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0 40px 20px 40px;
  margin: 0;
  span {
    font-weight: 800;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
    padding: 0 20px 10px 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.7rem;
    padding: 0 30px 10px 30px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.8rem;
    padding: 0 35px 10px 35px;
  }
  @media screen and (min-width: 800px) {
    font-size: 1rem;
    max-width: 600px;
    padding: 0 60px 20px 60px;
  }
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  gap: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    gap: 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.5rem;
    gap: 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2rem;
    gap: 25px;
  }
  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

const Time = styled.div`
  font-size: 4rem;
  font-weight: 700;
  @media screen and (max-width: 320px) {
    font-size: 2rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 3rem;
  }
`;
const TimerLabel = styled.span`
  display: block;
  font-size: 1rem;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1rem;
  }
`;
const User = styled.span`
  display: flex;
  flex-direction: row !important;
  img {
    max-width: 100%;
    height: 20px;
    width: 20px;
    background-color: #f8f8f8;
    border-radius: 50%;
    padding: 2px;
    margin-left: -5px;
  }
`;

const SignUpCount = styled.div`
  margin-bottom: 0px;
  align-items: center;
  justify-content: center;
  gap: 20px;

  display: flex;
  p {
    font-size: 1.2rem;
    font-weight: 300;
    span {
      font-weight: 800;
    }
  }
`;

const Price = styled(Link)`
  text-decoration: none;
  padding: 12px 30px;
  font-size: 1.2rem;
  display: inline-block;
  align-items: center;

  color: white;
  background: linear-gradient(
    20deg,
    #0796ee,
    #057bc4,
    #0d9efa,
    #0a7cc2,
    #0697f1
  );
  box-shadow: 0 0 15px rgba(6, 151, 241, 0.7);
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
  span {
    text-decoration: line-through;
    color: #ff0000;
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
`;

const Styledp = styled.p`
  span {
    font-weight: 800;
  }
  font-size: 0.6rem;
  font-weight: 400;
  @media screen and (min-width: 800px) {
    font-size: 0.8rem;
  }
`;

const PaymentOptions = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  display: flex;

  /* background-color: #020b19; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    gap: 10px;
    img {
      max-width: 100%;
      height: 20px;
      width: 20px;
    }
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

const Launch = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-09-7") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0",
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24),
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0",
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <Container>
        <CountdownContainer>
          <Heading>
            Launch{" "}
            <span
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(90deg, transparent, transparent, transparent, #0c364f, #0d9efa)",
                paddingRight: "10px",
                borderRadius: "5px ",
              }}
            >
              Discount
            </span>{" "}
            Countdown:
          </Heading>

          <SwipeComponent direction="left-to-right">
            <SubHeading>
              Our launchpad bonus discount offer is a once-in-a-lifetime offer.
              Get direct access to our{" "}
              <span> growing community of students!</span>
            </SubHeading>
          </SwipeComponent>
          <Timer>
            <div>
              <Time>{timeLeft.days || "00"}</Time>
              <TimerLabel>Days</TimerLabel>
            </div>
            <div>
              <Time>{timeLeft.hours || "00"}</Time>
              <TimerLabel>Hours</TimerLabel>
            </div>
            <div>
              <Time>{timeLeft.minutes || "00"}</Time>
              <TimerLabel>Minutes</TimerLabel>
            </div>
            <div>
              <Time>{timeLeft.seconds || "00"}</Time>
              <TimerLabel>Seconds</TimerLabel>
            </div>
          </Timer>
          <SignUpCount>
            <p>
              <span>600+</span> Signed Up
            </p>
            <User>
              <img src={pp3} />
              <img src={pp1} />
              <img src={pp2} />
              <img src={pp4} />
            </User>
          </SignUpCount>
          <Price to="/subscription">
            Get Started - <span>$199.99</span> $49.99
          </Price>

          <Styledp>
            <span>Full Access! Cancel anytime. </span> Lock in your discount
            price!
          </Styledp>
          <PaymentOptions>
            <span>
              <img src={payment1} />
              <img src={payment2} />
              <img src={payment3} />
              <img src={payment4} />
              <img src={payment5} />
            </span>

            <p>Pay with crypto or credit card</p>
          </PaymentOptions>
        </CountdownContainer>
      </Container>
    </>
  );
};

export default Launch;
