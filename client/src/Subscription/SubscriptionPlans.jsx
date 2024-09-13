import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import editorChoiceImage from "../Images/bestvalue.png";
import styled, { keyframes } from "styled-components";

const subscriptionPlans = [
  {
    crossText: "Popular by Choice",
    header: "Crypto",
    originalPrice: "$25",
    discountedPrice: 1500,
    priceUnit: "/month",
    uniqueId: "crypto_plan_001",
    encouragingMessage:
      "Gain access to high-probability crypto trades and learn how to grow your portfolio, even as a beginner.",
  },
  {
    crossText: "Most Demanded",
    header: "Forex",
    originalPrice: "$30",
    discountedPrice: 1500,
    priceUnit: "/month",
    uniqueId: "forex_plan_002",
    encouragingMessage:
      "Unlock Forex insights and strategies to maximize your success with real-time support.",
  },
  {
    crossText: "Closed",
    header: "Stock",
    originalPrice: "$50",
    discountedPrice: 3000,
    priceUnit: "/month",
    uniqueId: "stock_plan_003",
    encouragingMessage:
      "Get access to top-performing stocks and strategies that drive ROI from 30% to 300% monthly.",
  },
  {
    crossText: "Limited Offer",
    header: "Full Access",
    originalPrice: "$199",
    discountedPrice: 5000,
    priceUnit: "/month",
    uniqueId: "full_access_plan_004",
    encouragingMessage:
      "Join the premium club for complete access to all our services and expert mentorship.",
  },
];

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);

    // Call PaystackPop to initialize payment
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_41350ef7d812cb68b025ae5e1121972e55478718", // Replace with your Paystack public key
      email: "user@example.com",
      amount: plan.discountedPrice * 100,
      currency: "NGN",
      reference: `plan_${plan.uniqueId}_${Date.now()}`,
      onSuccess: (transaction) => {
        alert(`Payment complete! Reference: ${transaction.reference}`);
        // Add further actions after successful payment (e.g., database update)
      },
      onCancel: () => {
        alert("Payment was canceled");
      },
    });
  };

  return (
    <Container>
      <Head>Select a Plan</Head>
      <PlansWrapper>
        {subscriptionPlans.map((plan) => (
          <PlanContainer key={plan.uniqueId}>
            <PlanHeader>{plan.header}</PlanHeader>

            <PriceContainer>
              <OriginalPrice>{plan.originalPrice}</OriginalPrice>
              <DiscountedPrice>{`$${
                plan.discountedPrice / 100
              }`}</DiscountedPrice>
              <span>{plan.priceUnit}</span>
            </PriceContainer>

            <CTAButton
              crossText={plan.crossText}
              id={plan.uniqueId}
              onClick={() => handleSelectPlan(plan)}
            >
              Pay Now
            </CTAButton>
            <PaymentInfo>{plan.encouragingMessage}</PaymentInfo>

            {/* Side Decorations */}
            {plan.crossText === "Closed" ? (
              <SideCross crossText={plan.crossText}>{plan.crossText}</SideCross>
            ) : plan.header === "Full Access" ? (
              <SideCrossImage>
                <img src={editorChoiceImage} alt="Editor's Choice" />
              </SideCrossImage>
            ) : (
              <SidePlain crossText={plan.crossText}>{plan.crossText}</SidePlain>
            )}
          </PlanContainer>
        ))}
      </PlansWrapper>
    </Container>
  );
};

export default SubscriptionPlans;

const skeletonLoading = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0.1;
  }
  50% {
    transform: translateX(100%);
    opacity: 0.2;
  }
  100% {
    transform: translateX(700%);
    opacity: 0.1;
  }
`;
// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;
const PlanContainer = styled.div`
  position: relative;
  margin: 20px;
  padding: 0 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  overflow: hidden;
`;

const Head = styled.h2`
  font-size: 1.5rem;
  color: white;
`;
const PlanHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const PriceContainer = styled.div`
  margin: 15px 0;
  position: relative;
`;

const OriginalPrice = styled.span`
  font-size: 1.2rem;
  color: red;
  text-decoration: line-through;
  margin-right: 10px;
`;

const DiscountedPrice = styled.span`
  font-size: 1.8rem;
  color: #0f1a36;
`;

const CTAButton = styled.button`
  background: ${(props) => (props.crossText === "Closed" ? "#ddd" : "#0d9efa")};
  color: ${(props) => (props.crossText === "Closed" ? "#999" : "#fff")};
  padding: 0.35rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: ${(props) =>
    props.crossText === "Closed" ? "not-allowed" : "pointer"};
  font-size: 1rem;
  margin-top: 10px;
  pointer-events: ${(props) =>
    props.crossText === "Closed" ? "none" : "auto"};
  transition: background-color 0.3s ease;

  font-size: 1.2rem;

  align-items: center;
  gap: 10px;
  color: white;

  border-radius: 15px;

  overflow: hidden;
  cursor: pointer;
  overflow: hidden;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;

    left: 0; /* Start off-screen */
    width: 40px;
    height: 45px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );

    animation: ${skeletonLoading} 3s infinite linear;
    z-index: 1;
  }
  &:hover {
    background-color: ${(props) =>
      props.crossText === "Closed" ? "#ddd" : "#0056b3"};
  }
  &:hover {
    background-color: #121027;
    color: white;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
    padding: 11px 20px !important;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 11px 20px !important;
    font-size: 1.1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 15px 25px !important;
    font-size: 1.1rem;
  }
`;

const PaymentInfo = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #555;
`;

const SideCross = styled.div`
  background: ${(props) => (props.crossText === "Closed" ? "#0F1A36" : "red")};
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 5px 15px;
  border-radius: ${(props) => (props.crossText === "Closed" ? "30px" : "5px")};
  transform: ${(props) =>
    props.crossText === "Closed" ? "none" : "rotate(0deg)"};
`;

const SidePlain = styled.div`
  background: #0f1a36;
  position: absolute;
  top: 0px;
  right: 0px;
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 5px 15px;
`;

const SideCrossImage = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  transform: rotate(0deg);
  img {
    width: 80px;
    height: 80px;
  }
`;
const PlansWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0rem;
`;
