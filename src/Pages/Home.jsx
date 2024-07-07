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
      <Bonus />
      <Benefits />
      <Team />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
