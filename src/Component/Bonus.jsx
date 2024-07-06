import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import bg from "../Images/darkbg.png";
import laptop from "../Images/tv.png";
import arrow from "../Images/giftbox.png";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";

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
  @media screen and (max-width: 320px) {
    font-size: 1.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  padding: 0 60px;
  margin-bottom: 20px;
  @media screen and (max-width: 320px) {
    padding: 0 20px;
    font-size: 0.7rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 20px;
    font-size: 0.7rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 20px;
    font-size: 0.8rem;
  }
`;
const Laptop = styled.div`
  img {
    max-width: 100%;
    height: 150px;
    @media screen and (max-width: 320px) {
      height: 140px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 140px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 140px;
    }
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
    background-color: #121027;
    color: white;
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
  useBottomToTopSwipe(".bottom-top");
  return (
    <Container>
      <Content>
        <Heading className="bottom-top">Bonus Invite Offer </Heading>
        <SubHeading className="bottom-top">
          Register and get access to earn $30 US dollars immediately, and you
          can withdraw money immediately.
          <span> You will get $30 US dollars for each friend you invite.</span>
        </SubHeading>
        <ButtonContainer>
          <BButton>
            {" "}
            <img src={arrow} alt="Arrow" />
            Start
          </BButton>
        </ButtonContainer>
        <Laptop>
          <img
            src={laptop}
            className="animate__animated animate__headShake animate__slower animate__infinite"
          />
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
