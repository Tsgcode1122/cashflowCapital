import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import lockIcon from "../Images2025/grad.png";
import networkIcon from "../Images2025/gradp.png";
import arrowIcon from "../Images/arrows.png";
import nextIcon from "../Images2025/gradp.png";
import bg from "../Images/LineBg.png";
import bgg from "../Images/aabbb1.png";
import dotImage from "../Images/linee.png";

import { IoMdCheckmark } from "react-icons/io";
import StarsBackground from "./StarsBackground";
import Heading from "./Heading";
import { Link } from "react-router-dom";
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
  overflow-x: auto !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding-bottom: 3rem;
`;

const Contents = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding-bottom: 0.5rem;
  position: relative;
  margin: 0 !important;

  overflow: hidden !important;
  @media screen and (max-width: 850px) {
    /* background: url(${bg}) no-repeat center center; */
    background-size: cover;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 20px;
  position: relative;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  background: #0d9efa;
  padding: 5px;
  border-radius: 50%;
  z-index: 4 !important;
`;

const Arrow = styled(motion.img)`
  position: absolute;
  transform: rotate(90deg);
  width: 24px;
  height: 24px;
  top: -100px;
  left: 10px;
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 20px;
  top: 25px;
  height: calc(100% - 1px);
  width: 4px;
  background-color: #0d9efa;
`;

const VerticalLine2 = styled.div`
  position: absolute;
  left: 20px;
  top: 28px;
  height: calc(100% - 1px);
  width: 3px;
  background-color: #5cb6ee;
`;

const VerticalLine3 = styled.div`
  position: absolute;
  left: 20px;
  top: 25px;
  height: calc(100% - 30px);
  width: 2px;
  background-color: #9ac4df;
`;

const Content = styled.div`
  @media screen and (max-width: 320px) {
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;

const Title = styled.h2`
  color: #0d9efa;
  font-weight: 600;
  padding-bottom: 10px;
  font-size: 1.1rem;

  margin: 15px 0 0 10px;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.1rem;
  }
`;

const List = styled.div`
  /* padding-left: 20px;
  margin: 10px 0 0 0; */
`;

const ListItem = styled.p`
  border: 1px solid gray;
  border-radius: 40px;
  padding: 30px 0 30px 15px;
  list-style: none;
  font-size: 14px;
  /* font-weight: 600; */
  display: flex;
  width: 100%;
  position: relative;
  min-width: 350px;
  @media screen and (max-width: 320px) {
    font-size: 12px;
    padding: 20px 10px;
    min-width: 200px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 14px;
    padding: 20px 10px;
    min-width: 250px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 14px;
    padding: 20px 10px;
    min-width: 250px;
  }

  display: flex;
  gap: 10px;

  /* justify-content: center; */
  svg {
    color: white;
    font-size: 18px !important;
    font-weight: bolder !important ;
    /* margin-left: -20px; */
  }
`;

const Benefits = () => {
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
        <Heading>
          {" "}
          <span
            style={{
              display: "inline-block",
              background:
                "linear-gradient(90deg, transparent, transparent, transparent, #0c364f, #0d9efa)",
              paddingRight: "10px",
              borderRadius: "5px ",
            }}
          >
            Benefits
          </span>
        </Heading>
        <Big>
          <Section>
            <Icon src={lockIcon} alt="lock icon" />
            <Content>
              <Title>Access to Expert Mentors</Title>
              <List>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />1 - 1 Access to seasonal expert mentors
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Walk you through hands-by-hands
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Scale to to $10k/Month as fast as possible
                </ListItem>
              </List>
            </Content>
            <VerticalLine />
          </Section>

          <Section>
            <Icon src={networkIcon} alt="network icon" />
            <Content>
              <Title>ACCESS TO PRIVATE NETWORK</Title>
              <List>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Celebrate your wins with likeminds
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Network to top traders & investors
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Make friends while on your journey
                </ListItem>
              </List>
            </Content>
            <Arrow
              src={arrowIcon}
              alt="arrow icon"
              initial={{ y: -60 }}
              animate={arrowInView ? { y: 40 } : { y: -60 }}
              transition={{
                type: "spring",
                stiffness: 3,
                duration: 10,
              }}
              ref={arrowRef}
            />
            <VerticalLine2 />
          </Section>
          <Section>
            <Icon src={nextIcon} alt="network icon" />

            <Content>
              <Title>SIMPLIFIED E-LEARNING PLATFORM</Title>
              <List>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Beginners friendly E-learning community
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Beginners friendly E-learning community
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  24/7 Support to help you with any issues
                </ListItem>
              </List>
            </Content>
            <VerticalLine3 />
          </Section>
        </Big>
      </Contents>
      <Price to="/subscription">
        JOIN NOW - <span>$199.99</span> $49.99
      </Price>

      <Styledp>
        <span>Start today for Only $49.99.</span> Cancel anytime.
      </Styledp>
    </Container>
  );
};

export default Benefits;
const Big = styled.div`
  padding: 0 2rem;
  @media screen and (min-width: 800px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  @media screen and (min-width: 1400px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;
const Price = styled(Link)`
  text-decoration: none;
  padding: 12px 30px;
  font-size: 1.2rem;
  display: inline-block;
  align-items: center;
  margin-top: 1.5rem;
  color: white;
  background: linear-gradient(
    20deg,
    #0796ee,
    #057bc4,
    #0d9efa,
    #0a7cc2,
    #0697f1
  );
  box-shadow: 0 0 15px rgba(6, 151, 241, 0.7);
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
  span {
    text-decoration: line-through;
    color: #ff0000;
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

const Styledp = styled.p`
  span {
    font-weight: 800;
  }
  font-size: 0.6rem;
  font-weight: 400;
  @media screen and (min-width: 800px) {
    font-size: 0.8rem;
  }
`;
