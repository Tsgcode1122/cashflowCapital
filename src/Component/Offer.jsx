import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import bg from "../Images/darkbg.jpg";
import laptop from "../Images/laptop.png";
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
const Heading = styled.span`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 200;
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
const Styledp = styled.article`
  padding: 1rem 2rem;
  font-size: 1rem;
  /* line-height: 0.9; */
  font-weight: 100;
`;
const Offer = () => {
  return (
    <Container>
      <Content>
        <SubHeading>HERE'S WHAT YOUR GET...</SubHeading>
        <Heading>What We Offer ?</Heading>
        <Laptop>
          <img src={laptop} />
        </Laptop>

        <Styledp>
          We provide the best low risk & high rewards market insights and
          opportunities for you to copy trade and fast track your profits to
          grow your capital as fast as possible with our vetted experts signals
          and mentorships.
        </Styledp>
        <ButtonContainer>
          <BButton>
            Get Started
            <img src={arrow} alt="Arrow" />
          </BButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Offer;
