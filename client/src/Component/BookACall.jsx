import { Button, Progress } from "antd";

import React from "react";
import styled from "styled-components";

import bg from "../Images/darkb.png";
import GlowingDivider from "./GlowingDivider";
import BButton from "./BButton";
import ProgressBar from "./ProgressBar";
const Container = styled.div`
  background: url(${bg}) no-repeat center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
`;
const Contents = styled.div`
  background: rgba(0, 0, 0, 0.4);
`;
const Cont = styled.div`
  display: flex;
  align-items: center;
  padding: 0 100px;
  text-align: center;
  flex-direction: column;
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
  font-size: 14px;
  margin-bottom: 20px;
  color: #d3d3d3;
  font-weight: 200;
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
          <GlowingDivider />
          <CallToAction>Book a Consultation</CallToAction>
          <Description>
            <span>Got any questions or inquiries? </span> Sign up for a free
            consultation with top-rated instructors. Join us for risk-free
            exploration and kickstart your journey with Cashflow Capital.
          </Description>
          <BButton>Book Your Call</BButton>
        </Cont>
      </Contents>
    </Container>
  );
};

export default BookACall;
