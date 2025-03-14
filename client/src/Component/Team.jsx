import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import user from "../Images2025/ceo1.png";
import user1 from "../Images2025/ceo2.png";
import user2 from "../Images2025/ceo3.png";
import user3 from "../Images2025/ceo4.png";
import bg from "../Images/LineBg.png";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    background: url(${bg}) no-repeat center center;
    background-size: cover;
  }
  color: white;
`;
const Mini = styled.p`
  font-size: 14px;
  font-weight: 300;
  max-width: 350px;
  text-align: center;
  span {
    font-weight: 700;
  }
`;
const Contents = styled.div`
  text-align: center;

  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const UserList = styled.div`
  display: grid;
  /* grid-template-columns: 1fr; */
  gap: 10px;
  @media screen and (max-width: 320px) {
    /* grid-template-columns: 1fr 1fr; */
    gap: 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    /* grid-template-columns: 1fr 1fr; */
    gap: 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    /* grid-template-columns: 1fr 1fr; */
    gap: 20px;
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    gap: 50px;
  }
`;

const User = styled.div`
  display: flex;

  flex: 1;
  /* flex-direction: column; */
  align-items: center;
  text-align: center;
  p {
    color: #0d9efa;
  }
  img {
    max-width: 100%;
    height: 130px;
    margin-bottom: 10px;
    z-index: 6;
    @media screen and (min-width: 1000px) {
      height: 150px;
    }
  }

  p {
    font-weight: bold;
    margin: 5px 0;
  }

  span {
    font-weight: 300;
  }
  /* &:nth-child(3) {
    @media screen and (max-width: 799px) {
      grid-column: 1 / -1;
      justify-self: center;
      margin-top: 20px;
    }
    @media screen and (min-width: 1000px) {
      margin-top: 2px;
    }
  } */
`;
const CurveBg = styled.div`
  border-radius: 70px;
  padding: 20px 40px;
  width: 240px;
  margin-top: -10px;
  margin-left: -100px;
  text-align: right;
  background: linear-gradient(135deg, transparent, #001a37, rgb(0, 0, 0, 0.3));
  z-index: 2;
  @media screen and (max-width: 320px) {
    width: 200px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 220px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 220px;
  }
`;

const Team = () => (
  <Container>
    <Contents>
      <Heading>
        {" "}
        Meet Our{" "}
        <span
          style={{
            display: "inline-block",
            background:
              "linear-gradient(90deg, transparent, transparent, transparent, #0c364f, #0d9efa)",
            paddingRight: "10px",
            borderRadius: "5px ",
          }}
        >
          {" "}
          Team{" "}
        </span>
      </Heading>
      <Mini>
        DEDICATED TO <span>DRIVE YOU WITH RESULTS AND SKIP THE CHALLENGES</span>
      </Mini>
      <UserList>
        <User>
          <img src={user} alt="Founder" />
          <CurveBg>
            <p>President / CEO</p>
            <span>Kelvin Ogbonna</span>
          </CurveBg>
        </User>
        <User>
          <img src={user1} alt="Technical Analyst" />
          <CurveBg>
            <p>Technical Analyst</p>
            <span>Joseph Feranmi</span>
          </CurveBg>
        </User>
        <User>
          <img src={user2} alt="Stock Analyst" />
          <CurveBg>
            <p>Financial Analyst</p>
            <span>Tunde Otubanjo</span>
          </CurveBg>
        </User>
        <User>
          <img src={user3} alt="Stock Analyst" />
          <CurveBg>
            <p>Algo trading AI</p>
            <span>Cashflow bot</span>
          </CurveBg>
        </User>
      </UserList>
    </Contents>
  </Container>
);

export default Team;
