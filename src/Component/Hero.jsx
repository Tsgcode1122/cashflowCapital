import React from "react";
import styled from "styled-components";
import bg from "../Images/bg.png";
import arrow from "../Images/arrow.png";
import { TfiGift } from "react-icons/tfi";
import HeroMoving from "./HeroMoving";

const Container = styled.div`
  height: 75vh;
  background: url(${bg}) no-repeat right center;
  background-size: cover;
  background-position: 70% center;
  overflow: hidden !important;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Content = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  height: 70vh;
  width: 100%;
  /* border-radius: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;

  @media screen and (max-width: 320px) {
    margin-top: 0.6rem;
  }
`;

const Button = styled.button`
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

  @media screen and (max-width: 320px) {
    padding: 7px 12px;
    font-size: 1rem;
  }
`;

const InviteBonus = styled.span`
  margin-top: 1.5rem;
  font-size: 0.8rem;
`;

const Hero = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>
            Let Your Money
            <br />
            Work For You.
          </Title>
          <Subtitle>
            Make money from the <br />
            comfort of your device
          </Subtitle>
          <ButtonContainer>
            <Button>
              Get Started
              <img src={arrow} alt="Arrow" />
            </Button>
          </ButtonContainer>
          <InviteBonus>
            <TfiGift /> INVITE BONUS: Invite a friend & earn 50% commission
          </InviteBonus>
        </Content>
      </Container>
      <HeroMoving />
    </>
  );
};

export default Hero;
