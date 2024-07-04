import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import bg from "../Images/darkbg.jpg";
import { UserOutlined, DollarCircleOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
  padding: 20px;
`;

const CountdownContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  padding: 0 40px;
  margin-bottom: 20px;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 20px;

  div {
    margin: 0 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

const TimerLabel = styled.span`
  display: block;
  font-size: 1rem;
`;

const SignUpCount = styled.div`
  font-size: 1.2rem;
  margin-bottom: 20px;

  span {
    margin-left: 5px;
    vertical-align: middle;
  }
`;

const Price = styled.div`
  margin-bottom: 10px;
  padding: 12px 10px;
  font-size: 1.2rem;
  display: inline-block;
  align-items: center;

  color: white;
  background-color: #0d9efa;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  img {
    max-width: 100%;
    height: 20px;
  }

  &:hover {
    background-color: #ff6f13;
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

const StyledButton = styled(Button)`
  font-size: 1rem;
  padding: 10px 20px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #ff6f13;
  }
`;

const PaymentOptions = styled.div`
  margin-top: 20px;
  font-size: 1rem;

  .anticon {
    margin: 0 5px;
  }
`;

const Time = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`;

const Launch = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-10") - +new Date();
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
    <Container>
      <CountdownContainer>
        <Heading>Launch Discount Countdown:</Heading>
        <SubHeading>
          Our launchpad bonus discount offer is a once-in-a-lifetime offer. Get
          direct access to our growing community of students!
        </SubHeading>
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
          600+ Signed Up <UserOutlined />
        </SignUpCount>
        <Price>
          Get Started - <span>$199.99</span> $59.99
        </Price>

        <p>Full Access! Cancel anytime. Lock in your discount price!</p>
        <PaymentOptions>
          Pay with crypto or credit card <DollarCircleOutlined />
        </PaymentOptions>
      </CountdownContainer>
    </Container>
  );
};

export default Launch;
