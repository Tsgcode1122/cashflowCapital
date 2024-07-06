import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bg from "../Images/darkbg.png";
import laptop from "../Images/laptop.png";
import arrow from "../Images/arrow.png";
import bgg from "../Images/aabbb.png";
import "animate.css";
import StarsBackground from "./StarsBackground";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
`;

const NewBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bgg}) no-repeat center center;

  background-size: cover;
  color: white;
  padding: 40px 20px;
  position: relative;
  @media screen and (max-width: 320px) {
    background: url(${bgg}) no-repeat contain;
    background-position: 50% center;
  }
`;

const Content = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
`;

const Heading = styled.span`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 200;
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
  color: #0d9efa;
  font-weight: 400;
  margin-bottom: 2rem;
`;

const Laptop = styled.div`
  img {
    max-width: 100%;
    height: 150px;
    @media screen and (max-width: 320px) {
      height: 100px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 130px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 130px;
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
    --animate-duration: 9.5s;
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

const Styledp = styled.article`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 100;
  @media screen and (max-width: 320px) {
    padding: 0.8rem 0.8rem;
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.8rem;
  }
`;

const Offer = () => {
  return (
    <Container>
      <Content>
        <NewBg>
          <StarsBackground />
          <SubHeading>HERE'S WHAT YOUR GET...</SubHeading>
          <Heading>What We Offer ?</Heading>
          <Laptop>
            <img
              src={laptop}
              className="animate__animated animate__headShake animate__slower animate__infinite"
            />
          </Laptop>
          <Styledp>
            We provide the best low risk & high rewards market insights and
            opportunities for you to copy trade and fast track your profits to
            grow your capital as fast as possible with our vetted experts
            signals and mentorships.
          </Styledp>
          <ButtonContainer>
            <BButton>
              Get Started
              <img
                src={arrow}
                alt="Arrow"
                className="animate__animated animate__shakeX animate__slower animate__infinite"
              />
            </BButton>
          </ButtonContainer>
        </NewBg>
      </Content>
    </Container>
  );
};

export default Offer;
