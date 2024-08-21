import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import bg from "../Images/darkb.png";
import GlowingDivider from "./GlowingDivider";
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
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
  img {
    max-width: 100%;
    width: 70%;
    margin-bottom: 10px;
  }
`;
const Cont = styled.div`
  background-color: #0a132d;
  border-radius: 15px;
  padding: 20px 40px;
  max-width: 270px;
  display: flex;

  flex-direction: column;

  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border: 2px solid #4ea3f6;
`;
const Title = styled.h2`
  color: #4ea3f6;
  margin-bottom: 10px;
  text-align: center;
`;

const PriceWrapper = styled.div`
  background-color: transparent;
  padding: 10px 40px;
  text-align: center;
  display: inline-block;
  border-radius: 30px;
  border: 2px solid #4ea3f6;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: red;
  font-size: 20px;
  margin-right: 10px;
`;

const NewPrice = styled.span`
  font-size: 20px;

  color: #ffffff;
`;

const Styledp = styled.p`
  text-align: center;
  span {
    font-weight: 500;
  }
  font-size: 0.6rem;
  font-weight: 200;
`;

const FeaturesList = styled.div`
  padding: 0;
  margin: 20px 0;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const FeatureItem = styled.div`
  font-size: 16px;
  &::before {
    content: "✔";
    color: #4ea3f6;
    font-size: 16px;
    margin-right: 10px;
  }
`;

const Disclaimer = styled.p`
  text-align: center;
  font-size: 11px;

  color: #d3d3d3;
  margin: 20px 0;
  font-weight: 100;

  span {
    font-weight: 800;
    padding-bottom: 5px;
  }
`;

const PriceSection = styled.div`
  text-align: center;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Price = styled.div`
  padding: 12px 30px;
  font-size: 1.2rem;
  display: inline-block;

  color: white;
  gap: 10px;
  background-color: #0d9efa;
  border: 0.005px solid #97d3f8;
  border-radius: 25px;
  box-shadow:
    0 0 5px #0d9efa,
    0 0 8px #0d9efa,
    0 0 4px #0d9efa,
    0 0 6px #0d9efa;
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
    /* --animate-duration: 9.5s; */
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
const Divider = styled.div`
  margin-top: 10px;
  height: 0.5px;
  width: 100%;
  background-color: #0d9efa;
`;
const FastActionBonus = () => {
  return (
    <Container>
      <Contents>
        <Cont>
          <Title>Fast Action Bonus</Title>
          <PriceSection>
            <PriceWrapper>
              <OldPrice>$199.99</OldPrice>
              <NewPrice>$49.99</NewPrice>
            </PriceWrapper>
          </PriceSection>
          <Styledp>
            <span> Price increases soon.</span> Lock in your price now!
          </Styledp>
          <Divider />
          <FeaturesList>
            <FeatureItem>Get trading capital</FeatureItem>
            <FeatureItem>Learn to pass propfirms</FeatureItem>
            <FeatureItem>Access to 1 - 1 Mentorship</FeatureItem>
            <FeatureItem>FREE Cancellation/ Refund</FeatureItem>
          </FeaturesList>
          <Divider />
          <Disclaimer>
            <span>Even if you have 0 in your pocket, It's no problem.</span>
            <br /> The moment you leave this page you will never get the chance
            to see this opportunity again.
          </Disclaimer>
          <PriceSection>
            <Price>Join Now</Price>
          </PriceSection>
        </Cont>
      </Contents>
    </Container>
  );
};

export default FastActionBonus;
