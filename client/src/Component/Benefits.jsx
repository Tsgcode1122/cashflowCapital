import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import lockIcon from "../Images/open-padlock.png";
import networkIcon from "../Images/people.png";
import arrowIcon from "../Images/arrows.png";
import nextIcon from "../Images/rarr.png";
import bg from "../Images/LineBg.png";
import bgg from "../Images/aabbb1.png";
import dotImage from "../Images/linee.png";

import { IoMdCheckmark } from "react-icons/io";
import StarsBackground from "./StarsBackground";
import Heading from "./Heading";
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
  overflow: hidden !important;

  @media screen and (max-width: 850px) {
    background: url(${bg}) no-repeat center center;
    background-size: cover;
  }
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
  justify-content: left;
  padding-bottom: 2rem;
  color: white;
  padding: 10px 20px 2rem 20px;
  @media screen and (max-width: 320px) {
    padding: 10px 15px 2rem 15px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 10px 20px 2rem 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 10px 20px 2rem 20px;
  }
  @media screen and (min-width: 800px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  @media screen and (min-width: 1000px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;

const Contents = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.5rem;
  position: relative;
  margin: 0 !important;

  overflow: hidden !important;
`;

const Section = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  position: relative;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  background: #0d9efa;
  padding: 5px;
  border-radius: 50%;
  z-index: 5 !important;
`;

const Icon2 = styled.img`
  width: 20px;
  height: 20px;
  background: #030818;
  border-radius: 50%;
`;

const Arrow = styled(motion.img)`
  position: absolute;
  transform: rotate(90deg);
  width: 24px;
  height: 24px;
  top: -60px;
  left: 2px;
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 12px;
  top: 25px;
  height: calc(100% - 1px);
  width: 4px;
  background-color: #0d9efa;
`;

const VerticalLine2 = styled.div`
  position: absolute;
  left: 13px;
  top: 28px;
  height: calc(100% - 1px);
  width: 3px;
  background-color: #5cb6ee;
`;

const VerticalLine3 = styled.div`
  position: absolute;
  left: 13px;
  top: 25px;
  height: calc(100% - 30px);
  width: 2px;
  background-color: #9ac4df;
`;

const Content = styled.div`
  margin-left: 20px;
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

const Title = styled.h2`
  color: #0d9efa;
  font-weight: 600;
  padding-bottom: 1px;
  font-size: 1.1rem;
  margin: 0;
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

const List = styled.ul`
  padding-left: 20px;
  margin: 10px 0 0 0;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 0.8rem;
  font-weight: 400;
  position: relative;
  margin-bottom: 8px;
  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.75rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.8rem;
  }

  display: flex;
  gap: 10px;
  svg {
    color: #0d9efa;
    font-size: 16px !important;
    font-weight: bold !important ;
    margin-left: -20px;
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
                  <IoMdCheckmark />
                  Access to millionaire mentors
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Walk you through hands-by-hands
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Scale to millions as fast as possible
                </ListItem>
              </List>
            </Content>
            <VerticalLine />
          </Section>

          <Section>
            <Icon src={networkIcon} alt="network icon" />
            <Content>
              <Title>Access to Likemind Network</Title>
              <List>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Access to Network of top traders
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Make friends while on your journey
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Celebrate every wins with friends
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
              <Title>Simplified E-Learning Platform</Title>
              <List>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Simple step-by-step guide
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Access to millionaire mentors
                </ListItem>
                <ListItem>
                  {" "}
                  <IoMdCheckmark />
                  Access to millionaire mentors
                </ListItem>
              </List>
            </Content>
            <VerticalLine3 />
          </Section>
        </Big>
      </Contents>
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
  @media screen and (min-width: 1000px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;
