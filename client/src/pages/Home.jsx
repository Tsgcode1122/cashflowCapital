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

const Home = () => {
  return (
    <>
      <Hero />
      <Launch />
      <GlowingDivider />
      <Offer />
      <Learn />
      <Reviews />
      <SubscriptionPlans />
      <GlowingDivider />
      <Bonus />
      <GlowingDivider />
      <ChooseSystem />
      <GlowingDivider />
      <Benefits />
      <GlowingDivider />
      <Team />
      <GlowingDivider />
      <ScrollToTopButton />
      <Buffet />
      <Philosophy />
    </>
  );
};

export default Home;
