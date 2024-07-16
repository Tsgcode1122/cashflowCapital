import React from "react";
import styled from "styled-components";
import user from "../Images/buffett.png";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    max-width: 100%;
    width: 70%;
    margin-bottom: 10px;
  }
`;

const Header = styled.h1`
  color: #0d9efa;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Buffet = () => (
  <Container>
    <Contents>
      <Header>Our Teaching Philosophy</Header>
      <img src={user} />
    </Contents>
  </Container>
);

export default Buffet;
