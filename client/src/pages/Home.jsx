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
      <BigShare>
        <div>
          <Benefits />
        </div>
        <div>
          <Team />
        </div>
      </BigShare>

      <GlowingDivider />

      <GlowingDivider />

      <Buffet />
      <BigShare>
        <div>
          <Philosophy />
        </div>
        <div>
          <AlreadyPurchase />
        </div>
      </BigShare>
      <BigShare>
        <div>
          <AlreadyPurchase2 />
        </div>
        <div>
          <FastActionBonus />
        </div>
      </BigShare>

      <GlowingDivider />
      <BigShare>
        <div>
          <FinalThoughts />
        </div>
        <div>
          <BookACall />
          <NewsletterForm />
        </div>
      </BigShare>

      <Faqs />
      <ScrollToTopButton />
    </>
  );
};

export default Home;

const BigShare = styled.div`
  @media screen and (min-width: 1000px) {
    padding: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* grid-template-columns: 50% 50%; */
  }
  div {
    flex: 1;
  }
`;
