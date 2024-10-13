import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import user from "../Images/team1.jpg";
import user1 from "../Images/ogboona.png";
import user2 from "../Images/unknown.png";
import bg from "../Images/darkb.png";
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
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
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
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  @media screen and (max-width: 320px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    gap: 50px;
  }
`;

const User = styled.div`
  display: flex;

  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    color: #0d9efa;
  }
  img {
    max-width: 100%;
    height: 100px;
    width: 100px;
    background-color: #bfbdbc;
    border-radius: 50%;
    border: 1px solid #0d9efa;
    margin-bottom: 10px;
  }

  p {
    font-weight: bold;
    margin: 5px 0;
  }

  span {
    font-weight: 300;
  }
  &:nth-child(3) {
    @media screen and (max-width: 799px) {
      grid-column: 1 / -1;
      justify-self: center;
      margin-top: 20px;
    }
    @media screen and (min-width: 1000px) {
      margin-top: 2px;
    }
  }
`;

const Team = () => (
  <Container>
    <Contents>
      <Heading>
        {" "}
        Meet The{" "}
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
      <UserList>
        <User>
          <img src={user1} alt="Founder" />
          <p>President / CEO</p>
          <span>Kelvin Ogbonna</span>
        </User>
        <User>
          <img src={user} alt="Technical Analyst" />
          <p>Technical Analyst</p>
          <span>Joseph Feranmi</span>
        </User>
        <User>
          <img src={user2} alt="Stock Analyst" />
          <p>Financial Analyst</p>
          <span>Tunde Otubanjo</span>
        </User>
      </UserList>
    </Contents>
  </Container>
);

export default Team;
