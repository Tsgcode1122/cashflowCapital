import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import bg from "../Images/darkbg.jpg";
import laptop from "../Images/tv.png";
import arrow from "../Images/arrow.png";
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
  background: rgba(0, 0, 0, 0.2);
  padding: 40px 20px;
  display: flex;

  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0 !important;
  line-height: 1;
  color: #0d9efa;
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  padding: 0 60px;
  margin-bottom: 20px;
`;
const Laptop = styled.div`
  img {
    max-width: 100%;
    height: 150px;
  }
`;
const ButtonContainer = styled.div`
  margin-top: 1rem;

  @media screen and (max-width: 320px) {
    margin-top: 0.6rem;
  }
`;
const BButton = styled.button`
  padding: 12px 30px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 10px;
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
`;
const PriceSection = styled.div`
  text-align: center;
  margin-top: 10px;
`;
const Price = styled.div`
  padding: 12px 30px;
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

const Styledp = styled.p`
  span {
    font-weight: 500;
  }
  font-size: 0.6rem;
  font-weight: 200;
`;
const Bonus = () => {
  return (
    <Container>
      <Content>
        <Heading>Bonus Invite Offer </Heading>
        <SubHeading>
          Register and get access to earn $30 US dollars immediately, and you
          can withdraw money immediately.
          <span> You will get $30 US dollars for each friend you invite.</span>
        </SubHeading>
        <ButtonContainer>
          <BButton>Start</BButton>
        </ButtonContainer>
        <Laptop>
          <img src={laptop} />
        </Laptop>

        <PriceSection>
          <Price>
            Start Now - <span>$199.99</span> $59.99
          </Price>
          <Styledp>
            <span>Full Access! Cancel anytime.</span> Lock in your discount
            price!
          </Styledp>
        </PriceSection>
      </Content>
    </Container>
  );
};

export default Bonus;
