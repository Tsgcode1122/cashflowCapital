import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import bg from "../Images/whiteb.png";
import loi from "../Images/loi.png";
import loi4 from "../Images/loi4.png";
import { LineChartOutlined } from "@ant-design/icons";
import chart from "../Images/chart.png";

import SwipeComponent from "./SwipeComponent";
import GetStartedButton2 from "./GetStartedButton2";

const BigContainer = styled.div`
  background-color: #ffffff;
  padding-top: 1rem;
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
  /* background: rgba(0, 0, 0, 0.2); */
  padding: 15px 20px;
  display: flex;

  flex-direction: column;
  align-items: center;
`;
const Heading = styled.span`
  font-size: 1.8rem;
  margin-top: 30px;
  background-color: #1f4ca7;
  font-weight: 300;
  padding: 5px 10px;
  border-radius: 10px;
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
    font-weight: 500;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.6rem;
    font-weight: 500;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.7rem;
    font-weight: 500;
  }
`;

const SubHeading = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: black;
  font-weight: 400;
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
  border: 6px solid white;
  box-shadow:
    0 0 10px #f7f7f7,
    0 0 20px #162a35,
    0 0 4px #0d9efa,
    0 0 6px #012265fa;
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
    font-weight: 100;
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

  border-radius: 20px;

  box-shadow:
    0 0 10px #210dfa,
    0 0 20px #0d6cfa,
    0 0 10px #0d9efa,
    0 0 6px #400dfa;
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
    font-weight: 100;
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

  box-shadow:
    0 0 10px #f0d8a9,
    0 0 20px #fa970d,
    0 0 10px #f0d8a9,
    0 0 6px #c7fa0d;

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
    font-weight: 100;
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
const Learn = () => {
  return (
    <>
      <BigContainer>
        <Container>
          <Content>
            <Heading>What You Will Learn ?</Heading>
            <SubHeading>Learn how to invest & grow wealth...</SubHeading>
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
                      Stocks & <br /> Options
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
        <GetStartedButton2 />
      </BigContainer>
    </>
  );
};

export default Learn;
