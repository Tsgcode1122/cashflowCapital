import React from "react";
import styled from "styled-components";
import user from "../Images/user.png";
import bg from "../Images/darkb.png";
import GlowingDivider from "./GlowingDivider";

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
  background: rgba(0, 0, 0, 0.4);
  padding: 40px 0;

  width: 100%;
`;

const Header = styled.h1`
  color: #0d9efa;
  font-weight: 500;
  margin-bottom: 40px;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    max-width: 100%;
    height: 100px;
    width: 100px;
    background-color: #bfbdbc;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  p {
    font-weight: bold;
    margin: 5px 0;
  }

  span {
    font-weight: 300;
  }
`;

const Team = () => (
  <Container>
    <Contents>
      <Header>Team</Header>
      <UserList>
        <User>
          <img src={user} alt="Founder" />
          <p>Founder</p>
          <span>Kelvin Ogbonna</span>
        </User>
        <User>
          <img src={user} alt="Technical Analyst" />
          <p>Financial Analyst</p>
          <span>Joseph Feranmi</span>
        </User>
        <User>
          <img src={user} alt="Stock Analyst" />
          <p>Forex Analyst</p>
          <span>Tunde Otubanjo</span>
        </User>
      </UserList>
    </Contents>
  </Container>
);

export default Team;
