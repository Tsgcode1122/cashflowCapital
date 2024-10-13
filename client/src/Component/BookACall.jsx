import { Button, Progress } from "antd";

import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import bg from "../Images/darkb.png";
import GlowingDivider from "./GlowingDivider";
import BButton from "./BButton";
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
  background: #121933 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
`;
const Contents = styled.div`
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  padding-bottom: 5rem;
  @media screen and (min-width: 1000px) {
    padding-bottom: 1rem;
  }
`;
const Cont = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
  flex-direction: column;
  @media screen and (max-width: 320px) {
    padding: 0 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 2rem;
  }
`;
const Title = styled.h2`
  color: #4ea3f6;
  margin-bottom: 10px;
  text-align: center;
`;

const CallToAction = styled.h3`
  font-size: 20px;
  color: #4ea3f6;
  margin: 20px 0 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #d3d3d3;
  font-weight: 300;
  & span {
    font-weight: bold;
    color: white;
  }
`;

const BookACall = () => {
  return (
    <Container>
      <Contents>
        <Cont>
          <CallToAction>Book a Consultation</CallToAction>
          <Description>
            <span>Got any questions or inquiries? </span> Sign up for a free
            consultation with top-rated instructors. Join us for risk-free
            exploration and kickstart your journey with Cashflow Capital.
          </Description>
          <BButton to="https://calendly.com/cashflowcapital-info/free-30-minutes-consultation">
            Book Your Call
          </BButton>
        </Cont>
      </Contents>
    </Container>
  );
};

export default BookACall;
