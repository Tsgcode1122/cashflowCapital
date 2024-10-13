import React, { useEffect } from "react";
import Offer from "../Component/Offer";
import Bonus from "../Component/Bonus";
import Benefits from "../Component/Benefits";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      {" "}
      <Offer />
      <Bonus />
      <Benefits />
    </div>
  );
};

export default AboutUs;
