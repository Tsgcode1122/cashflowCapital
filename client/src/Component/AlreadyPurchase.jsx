import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import lockIcon from "../Images/open-padlock.png";
import networkIcon from "../Images/smartwatch.png";
import arrowIcon from "../Images/arrows.png";
import nextIcon from "../Images/check-mark.png";
import bg from "../Images/LineBg.png";

import StarsBackground from "./StarsBackground";
import Heading from "./Heading";

const Container = styled.div`
  background: #121933 !important;
  display: flex;
  flex-direction: column;

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
  overflow: hidden !important;
  justify-content: center;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
  color: white;
  padding: 10px 3rem;
  @media screen and (max-width: 320px) {
    padding: 10px 2rem 2rem 2rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 10px 2rem 2rem 2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 10px 1rem 2rem 2rem;
  }
`;

const Contents = styled.div`
  text-align: left;

  padding-bottom: 0.5rem;
  position: relative;
  margin: 0 !important;
  flex-direction: column;
  align-items: center;
  overflow: hidden !important;
`;

const Header = styled.h1`
  text-align: center;
  color: #0d9efa;
  font-weight: 500;
  padding: 1px 60px 0 60px;
  position: relative;
  @media screen and (max-width: 320px) {
    font-size: 28px;
    padding: 1px 20px 0 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1px 20px 0 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1px 20px 0 20px;
  }
`;
const Head = styled.h1`
  text-align: center;

  color: #0d9efa;
  font-weight: 500;
  padding: 20px 10px 0 10px;
  position: relative;
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

const Title = styled.h2`
  color: #0d9efa;
  font-weight: 600;
  padding-bottom: 10px;
  font-size: 1.1rem;
  margin: 0;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.3rem;
  }
`;

const ListItem = styled.div`
  font-size: 1rem;
  font-weight: 300;
  padding: 1rem 0;
  position: relative;
  margin-bottom: 8px;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
    padding: 0.4rem 0;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
    padding: 0.6rem 0;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.1rem;
    padding: 0.6rem 0;
  }
`;

const HeadWhite = styled.p`
  color: #0d9efa;
  margin: 0;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 7px;
  margin-top: 10px;
`;

const AlreadyPurchase = () => {
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
        <HeadWhite>Already purchased?</HeadWhite>
        <Heading>
          How your free{" "}
          <span
            style={{
              display: "inline-block",
              background:
                "linear-gradient(90deg, transparent, transparent, transparent, #0c364f, #0d9efa)",
              paddingRight: "10px",
              borderRadius: "5px ",
            }}
          >
            trial
          </span>{" "}
          <br /> works?
        </Heading>
        <NewBg>
          <Section>
            <Icon src={lockIcon} alt="lock icon" />
            <Content>
              <Title>Start Today</Title>

              <ListItem>
                Start enjoying full access to the most popular VIP tools
              </ListItem>
            </Content>
            <VerticalLine />
          </Section>

          <Section>
            <Icon src={networkIcon} alt="network icon" />
            <Content>
              <Title>In 5 days</Title>

              <ListItem>
                You'll get a reminder that your trial is about to end
              </ListItem>
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
              <Title>In 7 days</Title>

              <ListItem>
                Your VIP subscription will begin and you'll be charge. Cancel
                anytime before
              </ListItem>
            </Content>
            <VerticalLine3 />
          </Section>
        </NewBg>
      </Contents>
    </Container>
  );
};

export default AlreadyPurchase;
