import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "antd";
import bg from "../Images/darkb.png";
import loi from "../Images/loi.png";
import loi4 from "../Images/loi4.png";
import { LineChartOutlined } from "@ant-design/icons";
import chart from "../Images/chart.png";

import SwipeComponent from "./SwipeComponent";
import GetStartedButton2 from "./GetStartedButton2";
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
const BigContainer = styled.div`
  /* background: rgba(0, 0, 0, 0.4); */
  padding-top: 30px;
  padding-bottom: 30px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
`;
const Content = styled.div`
  text-align: center;

  padding: 15px 20px;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const SubHeading = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;

  color: #0d9efa;
  font-weight: 500;
  span {
    font-weight: 800;
  }
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
const ContentTwo = styled.div`
  color: white;
  text-align: left;
`;
const ContentThree = styled.div`
  color: #1f4ca7;
  text-align: left;
`;
const ContentOne = styled.div`
  color: #1f4ca7;
  text-align: left;
`;
const SubCont = styled.div`
  background-color: #f1f1f1;
  color: #1f4ca7;
  max-width: 300px;
  border: 5px solid #c4c4c4;
  @media screen and (max-width: 320px) {
    max-width: 220px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    max-width: 280px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    max-width: 280px;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  border-radius: 20px;

  h5 {
    font-size: 2.5rem;
    text-decoration: none;
    font-weight: 400;

    margin: 0 !important;
    @media screen and (max-width: 320px) {
      font-size: 2rem;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 2.5rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 2.5rem;
    }
  }
  p {
    font-size: 1rem;
    @media screen and (max-width: 320px) {
      font-size: 0.8rem;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 0.9rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 1rem;
    }
    font-weight: 300;
    span {
      font-weight: 600;
    }
  }
`;
const SubCont2 = styled.div`
  color: #f1f1f1;
  background-color: #1f4ca7;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  border: 5px solid #0c3586;
  border-radius: 20px;

  @media screen and (max-width: 320px) {
    max-width: 220px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    max-width: 280px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    max-width: 280px;
  }
  h5 {
    font-size: 2.5rem;
    text-decoration: none;
    font-weight: 400;
    padding-top: 20px;
    @media screen and (max-width: 320px) {
      font-size: 2rem;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 2.5rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 2.5rem;
    }
    margin: 0 !important;
  }
  p {
    font-size: 1rem;
    @media screen and (max-width: 320px) {
      font-size: 0.8rem;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 0.9rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 1rem;
    }
    font-weight: 300;
    span {
      font-weight: 600;
      /* padding-left: 5px; */
    }
  }
`;

const Line = styled.div`
  padding: 1rem 3rem 3rem 1rem;
  @media screen and (max-width: 320px) {
    padding: 0.8rem 2.5rem 1.5rem 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0.8rem 2.5rem 1.5rem 0.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.8rem 2.5rem 1.5rem 0.8rem;
  }
  background-size: cover;
`;
const Line2 = styled.div`
  background: url(${loi}) no-repeat right center !important;
  padding: 1rem 3rem 3rem 1rem;
  @media screen and (max-width: 320px) {
    padding: 0.8rem 2.5rem 1.5rem 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0.8rem 2.5rem 1.5rem 0.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.8rem 2.5rem 1.5rem 0.8rem;
  }
  background-size: cover;
`;
const Line3 = styled.div`
  background: url(${loi4}) no-repeat top center !important;
  background-position: 100% right;
  @media screen and (max-width: 320px) {
    padding: 0.8rem 2.5rem 1.5rem 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0.8rem 2.5rem 1.5rem 0.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.8rem 2.5rem 1.5rem 0.8rem;
  }
  padding: 1rem 3rem 3rem 1rem;
  background-size: cover;
`;
const SubCont3 = styled.div`
  color: #1f4ca7;
  background-color: #f0d8a9;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  border: 0px solid #ba9244;
  @media screen and (max-width: 320px) {
    max-width: 220px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    max-width: 280px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    max-width: 280px;
  }
  border-radius: 20px;

  h5 {
    font-size: 2.5rem;
    text-decoration: none;
    font-weight: 400;
    @media screen and (max-width: 320px) {
      font-size: 2rem;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 2.5rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 2.5rem;
    }
    padding-top: 20px;
    margin: 0 !important;
  }
  p {
    font-size: 1rem;
    color: black;
    font-weight: 300;
    @media screen and (max-width: 320px) {
      font-size: 0.8rem;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 0.9rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 1rem;
    }
    span {
      font-weight: 600;
      /* padding-left: 5px; */
    }
  }
`;
const Head = styled.div`
  display: flex;
  padding: 20px 0;

  span {
    font-size: 4rem;
  }
  img {
    max-width: 100%;
    height: 40px;
    margin-top: 2.5rem;
    margin-left: 3rem;
    align-items: end;
    position: absolute;
  }
`;
const Emoji = styled.span`
  font-size: 2rem;
  max-width: 100%;

  margin-top: 1.5rem;
  margin-left: 3rem;
  align-items: end;
  position: absolute;
`;
const BigShare = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 2rem;
    flex-wrap: nowrap;
  }
`;
const Learn = () => {
  return (
    <>
      <BigContainer>
        <Heading>
          What You Will{" "}
          <span
            style={{
              display: "inline-block",
              background:
                "linear-gradient(90deg, transparent, transparent, transparent, #0c364f, #0d9efa)",
              paddingRight: "10px",
              borderRadius: "5px ",
            }}
          >
            Learn?
          </span>
        </Heading>
        <SubHeading>
          Learn how to <span>invest & grow wealth...</span>{" "}
        </SubHeading>
        <BigShare>
          <Container>
            <Content>
              <ContentOne>
                <SwipeComponent direction="left-to-right">
                  <SubCont>
                    <Line>
                      <Head>
                        <span>01</span>
                        <img src={chart} />
                      </Head>

                      <h5>Forex</h5>
                      <p>
                        You will learn how to secure daily profits using tools
                        provided by the <span>financial markets</span>
                      </p>
                    </Line>
                  </SubCont>
                </SwipeComponent>
              </ContentOne>
            </Content>
          </Container>
          <Container>
            <Content>
              <ContentTwo>
                <SubCont2>
                  <Line2>
                    <Head>
                      <span>02</span>
                      <Emoji role="img" aria-label="money bag">
                        💰
                      </Emoji>
                    </Head>

                    <h5>Crypto</h5>
                    <p>
                      Learn to grow your income through investing into
                      <span> early crypto projects.</span>
                    </p>
                  </Line2>
                </SubCont2>
              </ContentTwo>
            </Content>
          </Container>
          <Container>
            <Content>
              <ContentThree>
                <SwipeComponent direction="right-to-left">
                  <SubCont3>
                    <Line3>
                      <Head>
                        <span>03</span>
                        <Emoji role="img" aria-label="briefcase">
                          💼
                        </Emoji>
                      </Head>

                      <h5>
                        Stocks <br />
                      </h5>
                      <p>
                        You will learn how to buy into shares the top 1% of the
                        <span> wealthiest individuals </span> are buying.
                      </p>
                    </Line3>
                  </SubCont3>
                </SwipeComponent>
              </ContentThree>
            </Content>
          </Container>
        </BigShare>
        {/* <GetStartedButton2 /> */}
      </BigContainer>
    </>
  );
};

export default Learn;
