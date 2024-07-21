import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import bg from "../Images/darkb.png";
import payment from "../Images/payment.png";
import payment1 from "../Images/usdc.png";
import payment2 from "../Images/etherium.png";
import payment3 from "../Images/solana.png";
import payment4 from "../Images/bitcoin.png";
import pp1 from "../Images/pp1.png";
import pp2 from "../Images/pp2.png";
import pp3 from "../Images/pp3.png";
import pp4 from "../Images/pp4.png";
import payment5 from "../Images/credit-card.png";
import user from "../Images/user.png";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
import { UserOutlined, DollarCircleOutlined } from "@ant-design/icons";
import useRightToLeftSwipe from "../animation/useRightToLeftSwipe";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
import GlowingDivider from "./GlowingDivider";
import BButton from "./BButton";
import SwipeComponent from "./SwipeComponent";

BButton;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
  /* padding: 20px; */
`;

const CountdownContainer = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 40px 20px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  margin-bottom: 10px;
  @media screen and (max-width: 320px) {
    font-size: 2rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  padding: 0 40px;
  margin-bottom: 20px;
  span {
    font-weight: 800;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
    padding: 0 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.7rem;
    padding: 0 30px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.8rem;
    padding: 0 35px;
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
  font-size: 2.5rem;
  font-weight: 700;
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2rem;
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
    font-weight: 100;
    span {
      font-weight: 800;
    }
  }
`;

const Price = styled.div`
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
  box-shadow:
    0 0 5px #0d9efa,
    0 0 8px #0d9efa,
    0 0 4px #0d9efa,
    0 0 6px #0d9efa;
  border: 0.005px solid #97d3f8;
  border-radius: 25px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
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
    font-weight: 500;
  }
  font-size: 0.6rem;
  font-weight: 200;
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
    font-weight: 100;
  }
`;

const Launch = () => {
  useBottomToTopSwipe(".bottom-top");
  useLeftToRightSwipe(".right-in");
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-23") - +new Date();
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
          <Heading>Launch Discount Countdown:</Heading>
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
          <Price>
            Get Started - <span>$199.99</span> $59.99
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
