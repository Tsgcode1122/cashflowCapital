import React from "react";
import Hero from "../Component/Hero";
import Launch from "../Component/Launch";
import Offer from "../Component/Offer";
import Learn from "../Component/Learn";
import Reviews from "../Component/Reviews";
import SubscriptionPlans from "../Component/SubscriptionPlans";
import Bonus from "../Component/Bonus";
import Benefits from "../Component/Benefits";
import Team from "../Component/Team";
import ScrollToTopButton from "../Component/ScrollToTopButton";
import GlowingDivider from "../Component/GlowingDivider";
import GetStartedButton from "../Component/GetStartedButton";
import Buffet from "../Component/Buffet";
import ChooseSystem from "../Component/ChooseSystem";
import Philosophy from "../Component/Philosophy";
import FinalThoughts from "../Component/FinalThoughts";
import FastActionBonus from "../Component/FastActionBonus";
import BookACall from "../Component/BookACall";
import NewsletterForm from "../Component/NewsletterForm";
import Faqs from "../Component/Faqs";
import AlreadyPurchase from "../Component/AlreadyPurchase";
import styled from "styled-components";
import AlreadyPurchase2 from "../Component/AlreadyPurchase2";

const Home = () => {
  return (
    <>
      <Hero />
      <Launch />
      <GlowingDivider />
      <Offer />
      <GlowingDivider />
      <Learn />
      <Reviews />
      <SubscriptionPlans />
      <GlowingDivider />
      <BigShare>
        <div>
          <Bonus />
          <GlowingDivider />
        </div>
        <div>
          <ChooseSystem />
          <GlowingDivider />
        </div>
      </BigShare>
      <div>
        <div>
          <Benefits />
        </div>
        <GlowingDivider />
        <div>
          <Team />
        </div>
      </div>

      <Buffet />
      <BigShare2>
        <div>
          <Philosophy />
        </div>
        <div>
          <AlreadyPurchase />
        </div>
      </BigShare2>
      <BigShare2>
        <div>
          <AlreadyPurchase2 />
        </div>
        <div>
          <FastActionBonus />
        </div>
      </BigShare2>

      <GlowingDivider />
      <BigShare2>
        <div>
          <FinalThoughts />
        </div>
        <div>
          <BookACall />
          <NewsletterForm />
        </div>
      </BigShare2>

      <Faqs />
      <ScrollToTopButton />
    </>
  );
};

export default Home;

const BigShare = styled.div`
  background: rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 1000px) {
    padding: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
  }
  @media screen and (min-width: 1200px) {
    padding: 0 8rem;
  }
  div {
    flex: 1;
  }
`;
const BigShare2 = styled.div`
  background: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  @media screen and (min-width: 1000px) {
    margin: 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  @media screen and (min-width: 1200px) {
    margin: 1rem 8rem;
  }
  div {
    flex: 1;
  }
`;
