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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden !important;
  justify-content: center;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
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
  padding: 10px 60px 2rem 60px;
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
  background: rgba(0, 0, 0, 0.4);
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
  font-weight: 200;
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

  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
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
  font-weight: 200;
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
const HeadWhite = styled.p`
  color: white;
  margin: 0;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 7px;
  margin-top: 10px;
`;

const Styledp = styled.p`
  color: white;
  margin: 0;
  padding-bottom: 5px;
  font-size: 1rem;
  font-weight: 200;
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
  font-weight: 200;
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
        <Header>
          How your free trial <br /> works?
        </Header>
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
          <PriceSection>
            <Styledp>
              7-days free trial, then <br />
              $552.99/year ($49.99/month)
            </Styledp>
            <Price>Get Started</Price>
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

export default AlreadyPurchase;
