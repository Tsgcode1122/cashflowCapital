import React from "react";
import styled from "styled-components";
import lockIcon from "../Images/open-padlock.png"; // Path to the lock icon image
import networkIcon from "../Images/people.png"; // Path to the network icon image
import arrowIcon from "../Images/arrows.png";
import nextIcon from "../Images/next.png";
import bg from "../Images/darkbg.png";
import bgg from "../Images/aabb.png";
import dotImage from "../Images/linee.png";
import user from "../Images/user.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
`;
const NewBg = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  background: url(${bgg}) no-repeat center center;
  background-size: cover;

  color: white;
  padding: 10px 60px;
`;

const Contents = styled.div`
  text-align: left;
  background: rgba(0, 0, 0, 0.4);

  margin: 0 !important;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1`
  text-align: center;
  color: #0d9efa;
  font-weight: 500;
  padding: 20px 60px 0 60px;
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 4.5em;
    height: 2em;
    background-image: url(${dotImage});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    margin-top: 10px;
    margin-left: 30px;
    @media screen and (max-width: 320px) {
      margin-left: 10px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      margin-left: 20px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      margin-left: 20px;
    }
  }
  &::after {
    content: "";
    display: inline-block;
    width: 4.5em;
    height: 2em;
    background-image: url(${dotImage});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    margin-top: 10px;
    margin-right: 30px;
    @media screen and (max-width: 320px) {
      margin-right: 10px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      margin-right: 20px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      margin-right: 20px;
    }
  }
`;

const User = styled.span`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
    height: 100px;
    width: 100px;
    background-color: #bfbdbc;
    border-radius: 50%;
  }
`;

const Team = () => (
  <Container>
    <Contents>
      <Header>Team</Header>
      <NewBg>
        <User>
          <img src={user} />
          <img src={user} />
          <img src={user} />
        </User>
      </NewBg>
    </Contents>
  </Container>
);

export default Team;
