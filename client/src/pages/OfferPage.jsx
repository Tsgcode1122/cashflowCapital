import React, { useEffect } from "react";

import SubscriptionPlans from "../Subscription/SubscriptionPlans";

const OfferPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <SubscriptionPlans />
    </>
  );
};

export default OfferPage;
