import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import lockIcon from "../Images/open-padlock.png";
import networkIcon from "../Images/smartwatch.png";
import arrowIcon from "../Images/arrows.png";
import nextIcon from "../Images/check-mark.png";
import bg from "../Images/darkb.png";
import bgg from "../Images/aabbb1.png";
import dotImage from "../Images/linee.png";
import StarsBackground from "./StarsBackground";
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
  display: flex;
  flex-direction: column;
  overflow: hidden !important;
  justify-content: center;
  background: #121933 !important;

  color: white;
`;

const Imm = styled.div`
  position: absolute;
  right: 0;
  margin-bottom: -26rem;
  img {
    max-width: 100%;
    height: 150px;
  }
`;

const NewBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
  color: white;
  padding: 10px 60px 20px 60px;
  @media screen and (max-width: 320px) {
    padding: 10px 1rem 2rem 0.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 10px 1rem 2rem 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 10px 1rem 2rem 1rem;
  }
`;

const Contents = styled.div`
  text-align: left;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  padding-bottom: 0.5rem;
  position: relative;
  margin: 0 !important;
  flex-direction: column;
  align-items: center;
  overflow: hidden !important;
`;

const Head = styled.h1`
  text-align: center;

  color: #0d9efa;
  font-weight: 500;
  padding: 10px 10px 0 10px;
  position: relative;
`;

const Content = styled.div`
  margin-left: 20px;
  padding: 0;
  @media screen and (max-width: 320px) {
    margin-left: 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-left: 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-left: 20px;
  }
`;

const PriceSection = styled.div`
  text-align: center;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Price = styled.div`
  padding: 12px 40px;
  font-size: 1.2rem;
  display: inline-block;
  align-items: center;
  color: white;
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
    padding: 10px 30px;
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.1rem;
    padding: 10px 40px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.1rem;
    padding: 10px 40px;
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

const Description = styled.p`
  margin-top: 24px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  span {
    padding-top: 1rem;
  }

  font-size: 0.9rem;
  font-weight: 300;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1rem;
  }
`;

const Styledp = styled.p`
  color: white;
  margin: 0;
  padding-bottom: 5px;
  font-size: 1rem;
  font-weight: 300;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1rem;
  }
`;
const End = styled.p`
  margin-top: 2px;
  text-align: center;
  color: #0d9efa;
  span {
    font-weight: 800;
  }
  font-size: 0.9rem;
  font-weight: 300;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1rem;
  }
`;
const AlreadyPurchase2 = () => {
  const [arrowInView, setArrowInView] = useState(false);
  const arrowRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setArrowInView(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (arrowRef.current) {
      observer.observe(arrowRef.current);
    }

    return () => {
      if (arrowRef.current) {
        observer.unobserve(arrowRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <Contents>
        <StarsBackground />
        <NewBg>
          <PriceSection>
            <Styledp>
              7-days free trial, then <br />
              $552.99/year ($49.99/month)
            </Styledp>
            <Price href="/subscription">Get Started</Price>
            <Styledp>Cancel anytime!</Styledp>
          </PriceSection>
          <div>
            <Head>Final Choice</Head>
            <Description>
              This is your final choice to experience financial independence,
              you’ve spent hundreds of thousands in university fees to come out
              with no jobs / student debts.{" "}
              <span>
                Now is your final chance to invest in yourself and your finances
                for as low as 1 cup of Starbucks
              </span>
            </Description>
            <End>HERE's WHY YOU SHOULD ACT NOW...</End>
          </div>
        </NewBg>
      </Contents>
    </Container>
  );
};

export default AlreadyPurchase2;
