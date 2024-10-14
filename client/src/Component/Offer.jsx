import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import bg from "../Images/LineBg.png";
import laptop from "../Images/laptop.png";
import arrow from "../Images/arr.png";
import bgg from "../Images/Green2.png";
import "animate.css";
import StarsBackground from "./StarsBackground";
import "./GlowingButton.css";
import BButton from "./BButton";
import { Link } from "react-router-dom";
import Heading from "./Heading";

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
  /* background: url(${bgg}) no-repeat center center; */

  background-size: cover;
  color: white;
  padding: 40px 20px 30px 20px;
  position: relative;
  @media screen and (max-width: 320px) {
    background: url(${bgg}) no-repeat contain;
    background-position: 50% center;
    padding: 40px 15px 30px 15px;
  }

  @media (min-width: 321px) and (max-width: 399px) {
    padding: 40px 15px 30px 15px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 40px 20px 30px 20px;
  }
`;

const Content = styled.div`
  text-align: center;
`;

const SubHeading = styled.p`
  font-size: 0.9rem;
  color: #0d9efa;
  font-weight: 500;
  margin-bottom: 1rem;
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

const Styledp = styled.article`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 300;
  @media screen and (max-width: 320px) {
    padding: 0.8rem 0.4rem;
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0.8rem 1rem;
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
  }
`;
const Styledpp = styled.p`
  span {
    font-weight: 800;
  }
  font-size: 0.6rem;
  font-weight: 500;
`;
const Offer = () => {
  return (
    <Container>
      <Content>
        <NewBg>
          <StarsBackground />

          <Heading>
            What We{" "}
            <span
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(90deg, transparent, transparent, transparent, #0c364f, #0d9efa)",
                paddingRight: "10px",
                borderRadius: "5px ",
              }}
            >
              {" "}
              Offer?
            </span>
          </Heading>
          <SubHeading>HERE'S WHAT YOU GET...</SubHeading>
          <BigShare>
            <div>
              <Laptop>
                <img
                  src={laptop}
                  className="animate__animated animate__headShake animate__slower animate__infinite"
                />
              </Laptop>
            </div>
            <div>
              <Styledp>
                We provide the best low risk & high rewards market insights and
                opportunities for you to copy trade and fast track your profits
                to grow your capital as fast as possible with our vetted experts
                signals and mentorships.
              </Styledp>
              <ButtonContainer>
                <BButton to="/subscription">
                  Get Started
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="animate__animated animate__shakeX animate__slower animate__infinite"
                  />
                </BButton>
                <Styledpp>
                  <span>Start today for Only $49.99.</span> Cancel anytime!
                </Styledpp>
              </ButtonContainer>
            </div>
          </BigShare>
        </NewBg>
      </Content>
    </Container>
  );
};

export default Offer;
const BigShare = styled.div`
  @media screen and (min-width: 1000px) {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 0 2rem;
    border-radius: 20px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    margin: 0 4rem;
  }
  div {
    flex: 1;
  }
  @media screen and (min-width: 1200px) {
    margin: 0 8rem;
  }
`;
