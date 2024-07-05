import React from "react";
import styled from "styled-components";
import lockIcon from "../Images/open-padlock.png"; // Path to the lock icon image
import networkIcon from "../Images/people.png"; // Path to the network icon image
import arrowIcon from "../Images/arrows.png";
import nextIcon from "../Images/next1.png";
import bg from "../Images/darkbg.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
`;

const Contents = styled.div`
  text-align: left;
  background: rgba(0, 0, 0, 0.2);
  padding: 40px 60px;

  margin: 0 !important;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1`
  text-align: center;
  color: #0d9efa;
  font-weight: 500;
  &::before {
    content: "•";
    color: white;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
  &::after {
    content: "•";
    color: white;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
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
`;
const Icon2 = styled.img`
  width: 5px;
  height: 5px;
  margin-left: 15px;
  background: #0d9efa;
  padding: 5px;
  border-radius: 50%;
`;

const Arrow = styled.img`
  position: absolute;
  transform: rotate(90deg);
  width: 24px;
  height: 24px;

  top: -26px;
  left: 3px;
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
  height: calc(100% - 1px);
  width: 2px;
  background-color: #9ac4df;
`;

const Circle = styled.div`
  /* left: 21px; */
  /* top: 48px; */
  height: 10px;
  border-radius: 50%;
  width: 10px;
  background-color: #0d9efa;
`;

const Content = styled.div`
  margin-left: 20px;
`;

const Title = styled.h2`
  color: #0d9efa;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
`;

const List = styled.ul`
  padding-left: 20px;
  margin: 10px 0 0 0;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 0.8rem;
  font-weight: 200;
  position: relative;
  margin-bottom: 5px;

  &::before {
    content: "•";
    color: white;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const Benefits = () => (
  <Container>
    <Contents>
      <Header>Benefits</Header>

      <Section>
        <Icon src={lockIcon} alt="lock icon" />
        <Content>
          <Title>Access to Expert Mentors</Title>
          <List>
            <ListItem>Access to millionaire mentors</ListItem>
            <ListItem>Walk you through hands-by-hands</ListItem>
            <ListItem>Scale to millions as fast as possible</ListItem>
          </List>
        </Content>

        <VerticalLine />
      </Section>

      <Section>
        <Icon src={networkIcon} alt="network icon" />
        <Content>
          <Title>Access to Likemind Network</Title>
          <List>
            <ListItem>Access to Network of top traders</ListItem>
            <ListItem>Make friends while on your journey</ListItem>
            <ListItem>Celebrate every wins with friends</ListItem>
          </List>
        </Content>
        <Arrow src={arrowIcon} alt="arrow icon" />
        <VerticalLine2 />
      </Section>
      <Section>
        <Icon2 src={nextIcon} alt="network icon" />
        <Content>
          <Title>Simplified E-Learning Platform</Title>
          <List>
            <ListItem>Simple step-by-step guide</ListItem>
            <ListItem>Access to millionaire mentors</ListItem>
            <ListItem>Access to millionaire mentors</ListItem>
          </List>
        </Content>

        <VerticalLine3 />
      </Section>
    </Contents>
  </Container>
);

export default Benefits;
