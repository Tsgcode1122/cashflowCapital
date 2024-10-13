import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "antd";
import bg from "../Images/darkb.png";
import { IoMdCheckmark } from "react-icons/io";
const skeletonLoading = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0.1;
  }
  50% {
    transform: translateX(100%);
    opacity: 0.2;
  }
  100% {
    transform: translateX(700%);
    opacity: 0.1;
  }
`;
const Container = styled.div`
  background: #121933 !important;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
`;
const Contents = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
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
  padding: 20px 1rem;
  max-width: 300px;
  display: flex;
  @media screen and (max-width: 320px) {
    max-width: 260px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    max-width: 280px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    max-width: 280px;
  }
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
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
`;

const NewPrice = styled.span`
  font-size: 20px;
  font-weight: 600;
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

  display: flex;
  gap: 10px;
  svg {
    color: #0d9efa;
    font-size: 16px !important;
    font-weight: bold !important ;
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
  border: 1px solid #379ddd;
  border-radius: 25px;
  position: relative;
  overflow: hidden;

  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;

    left: 0; /* Start off-screen */
    width: 40px;
    height: 45px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );

    animation: ${skeletonLoading} 3s infinite linear;
    z-index: 1;
  }
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
  margin-top: 1px;
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
            <FeatureItem>
              <IoMdCheckmark />
              Get trading capital
            </FeatureItem>
            <FeatureItem>
              <IoMdCheckmark />
              Learn to pass propfirms
            </FeatureItem>
            <FeatureItem>
              <IoMdCheckmark />
              Access to 1 - 1 Mentorship
            </FeatureItem>
            <FeatureItem>
              <IoMdCheckmark />
              FREE Cancellation/ Refund
            </FeatureItem>
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
