import React from "react";
import styled from "styled-components";
import bg from "../Images/bg.png";
import arrow from "../Images/arr.png";
import g from "../Images/gbox.png";
import { TfiGift } from "react-icons/tfi";
import HeroMoving from "./HeroMoving";
import "animate.css";
import BButton from "./BButton";
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
  padding: 5rem 2rem 2rem 2rem;
  height: 70vh;
  width: 100%;
  @media screen and (max-width: 320px) {
    padding: 3rem 1.8rem 1.8rem 1.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1.8rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button2 = styled.button`
  padding: 12px 30px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0d9efa;
  background-color: transparent;
  border: 2px solid #0d9efa;
  border-radius: 25px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  img {
    max-width: 100%;
    height: 20px;
    --animate-duration: 4.5s;
  }

  &:hover {
    background-color: #121027;
    color: white;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 320px) {
    padding: 12px 40px;
    font-size: 1.2rem;
  }
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-style: italic;
  @media screen and (max-width: 320px) {
    font-size: 2rem;
    margin-bottom: 0rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2.5rem;
    margin-bottom: 0.4rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2.5rem;
    margin-bottom: 0.4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 320px) {
    font-size: 1.3rem;
    margin-bottom: 0.1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.4rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.4rem;
  }
`;

const ButtonContainer = styled.div``;
const Button = styled.button`
  padding: 11px 30px;
  font-size: 1.2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
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
    0 0 15px #0d9efa,
    0 0 20px #0d9efa,
    0 0 10px #0d9efa,
    0 0 6px #0d9efa;
  border: 0.005px solid #97d3f8;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 30px;
    /* background: linear-gradient(90deg, transparent, #0d9efa, transparent); */
  }

  img {
    max-width: 100%;
    height: 15px;
    --animate-duration: 9.5s;
    @media screen and (max-width: 320px) {
      height: 10px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 12px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 12px;
    }
  }

  &:hover {
    background-color: #121027;
    color: white;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
    padding: 11px 20px !important;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 11px 20px !important;
    font-size: 1.1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 15px 25px !important;
    font-size: 1.1rem;
  }
`;

const InviteBonus = styled.span`
  margin-top: 0.6rem;
  font-size: 0.76rem;
  span {
    font-weight: 900;
  }
  img {
    max-width: 100%;
    height: 20px;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.6rem;
    margin-top: 0.4rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.7rem;
    margin-top: 0.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.7rem;
    margin-top: 1.2rem;
  }
`;

const Hero = () => {
  return (
    <>
      <Container>
        <Content>
          <Button2>Let's Get Started</Button2>
          <Title className="animate__animated animate__pulse">
            Let Your Money
            <br />
            Work For You.
          </Title>
          <Subtitle>
            Make money from the <br />
            comfort of your device
          </Subtitle>

          <Button>
            Get Started
            <img
              src={arrow}
              alt="Arrow"
              className="animate__animated  animate__shakeX animate__slower animate__infinite"
            />
          </Button>

          <InviteBonus>
            <span>
              <img src={g} /> INVITE BONUS:
            </span>{" "}
            Invite friends & earn 50% commission
          </InviteBonus>
        </Content>
      </Container>
      <HeroMoving />
    </>
  );
};

export default Hero;
