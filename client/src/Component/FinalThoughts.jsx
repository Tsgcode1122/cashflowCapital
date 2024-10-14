import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "antd";
import bg from "../Images/LineBg.png";
import laptop from "../Images/world.png";

import bgg from "../Images/Green2.png";
import BButton from "./BButton";
import SwipeComponent from "./SwipeComponent";
import ProgressBar from "./ProgressBar";
import Heading from "./Heading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #121933 !important;
  color: white;
`;
const Content = styled.div`
  text-align: center;
  @media screen and (max-width: 850px) {
    background: url(${bg}) no-repeat center center;
    background-size: cover;
  }
  padding: 20px 0 20px 0;
  display: flex;

  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1000px) {
    padding: 0;
  }
`;
const NewBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-size: cover;
  color: white;
  padding: 10px 20px 0px 20px;
  position: relative;
  @media screen and (max-width: 320px) {
    background-position: 50% center;
  }
  @media screen and (min-width: 1000px) {
    padding: 0;
  }
`;

const SubHeading = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: #0d9efa;
  margin: 0 !important;
  padding: 0 80px;
  span {
    font-weight: bold;
  }
  @media screen and (max-width: 320px) {
    padding: 0 20px;
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 20px;
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 20px;
    font-size: 1.1rem;
  }
`;
const Laptop = styled.div`
  margin-top: 0px;

  img {
    max-width: 100%;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));

    height: 260px;

    @media screen and (max-width: 320px) {
      height: 180px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 200px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 200px;
    }
  }
`;

const StyledPP = styled.p`
  padding: 0 2rem;
  color: white;

  span {
    font-weight: 800;
  }
  font-size: 1rem;
  font-weight: 400;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.85rem;
  }
`;
const Styledp = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;
const FinalThoughts = () => {
  return (
    <Container>
      <Content>
        <NewBg>
          <Heading>
            Satisfactory{" "}
            <span
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(90deg, transparent, transparent, transparent, #0c364f, #0d9efa)",
                paddingRight: "10px",
                borderRadius: "5px ",
              }}
            >
              Guarantee
            </span>{" "}
          </Heading>
          <SwipeComponent direction="left-to-right">
            <SubHeading>
              We
              <span> Guarantee</span> you make back your money in 29 working
              days or we get your money back
            </SubHeading>
          </SwipeComponent>

          <Laptop>
            <img
              src={laptop}
              className="animate__animated animate__headShake animate__slower animate__infinite"
            />
          </Laptop>

          <Styledp>
            Our Price will Increase After <br />
            1,000 Members Reached.
          </Styledp>
          <StyledPP>
            Our Price will Increase wehn we achieve our total students goals
          </StyledPP>
        </NewBg>
        <Styledp> 95% Complete</Styledp>
        <ProgressBar />
      </Content>
    </Container>
  );
};

export default FinalThoughts;
