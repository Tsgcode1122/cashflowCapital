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
      <Bonus />
      <GlowingDivider />
      <ChooseSystem />
      <GlowingDivider />
      <Benefits />
      <GlowingDivider />
      <Team />
      <GlowingDivider />
      <Buffet />
      <Philosophy />
      <GlowingDivider />
      <AlreadyPurchase />
      <FastActionBonus />
      <FinalThoughts />
      <BookACall />
      <NewsletterForm />
      <Faqs />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
