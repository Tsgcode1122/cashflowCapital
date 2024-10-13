import React, { useEffect } from "react";
import SubscriptionPlans from "../Component/SubscriptionPlans";

const SubscriptionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <SubscriptionPlans />
    </>
  );
};

export default SubscriptionPage;
