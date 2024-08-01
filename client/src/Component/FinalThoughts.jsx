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
  @media screen and (max-width: 320px) {
    font-size: 18px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 22px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 24px;
  }
`;
const SubHeading = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  padding: 0 80px;
  span {
    font-weight: bold;
  }
  @media screen and (max-width: 320px) {
    padding: 0 30px;
    font-weight: 500;
    font-size: 1.4rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 60px;
    font-weight: 500;
    font-size: 1.6rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 60px;
    font-weight: 500;
    font-size: 1.8rem;
  }
`;
const Cont = styled.div`
  background-color: #0e46aa;
  border-radius: 10px;
  padding: 20px;
  color: white;
  display: flex;
  width: 50%;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 320px) {
    width: 70%;
    padding: 40px 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 65%;
    padding: 40px 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 65%;
    padding: 40px 20px;
  }
`;
const Head = styled.h3`
  padding: 20px 40px;
  margin: 0;
  font-weight: 400;
  @media screen and (max-width: 320px) {
    padding: 10px 20px;
  }
`;
const Mini = styled.div``;
const MiniH = styled.p`
  margin: 0;
  font-size: 16px;
  padding-bottom: 5px;
  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 18px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 18px;
  }
`;
const Styledp = styled.p`
  font-size: 10px;
  margin: 0;
  font-weight: 200;
  padding: 5px;
  @media screen and (max-width: 320px) {
    padding: 5px 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 5px 15px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 5px 15px;
  }
`;
const SubCont = styled.p`
  font-size: 16px;
  font-weight: 200;
  margin: 0;
  padding-bottom: 5px;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;
const SubCont2 = styled.p`
  margin: 0;
  font-size: 16px;
  padding-bottom: 5px;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;
const StylePP = styled.p`
  font-size: 10px;
  margin: 0;
  font-weight: 200;
  padding: 25px 5px 15px 5px;
  @media screen and (max-width: 320px) {
    padding: 25px 1px 10px 1px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 30px 5px 10px 5px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 30px 5px 10px 5px;
  }
`;
const FinalThoughts = () => (
  <Container>
    <Contents>
      <SubHeading>Final Thoughts</SubHeading>
      <Cont>
        <Head>Secure Your Spot For Just $49</Head>
        <Mini>
          <MiniH>Get Capital for Trading</MiniH>
          <SubCont>Our Price Will Increase to $147</SubCont>
          <SubCont2>After 170,000 Members Reached</SubCont2>
          <Styledp>
            Our price will increase when we achieve our total student goals.
          </Styledp>
        </Mini>
        <StylePP>Even if you have 0 in your pocket. its no problem</StylePP>
      </Cont>
    </Contents>
  </Container>
);

export default FinalThoughts;
