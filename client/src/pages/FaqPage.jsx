import React, { useEffect } from "react";
import Faqs from "../Component/Faqs";

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <Faqs />;
};

export default FaqPage;
