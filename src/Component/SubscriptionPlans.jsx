import React from "react";
import styled, { keyframes } from "styled-components";
import bg from "../Images/darkbg.jpg";
import editorChoiceImage from "../Images/bestvalue.png";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
import StarsBackground from "./StarsBackground";
import { GiCheckMark } from "react-icons/gi";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bg});
  background-repeat: repeat !important;
  background-size: 10px;
  position: relative;
  color: white;
`;

const Content = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 40px 0;
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const SubscriptionWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor || "#f0f2f5"};
  max-width: 350px;
  border-radius: 20px;
  position: relative;
  padding: 0 0 20px 0;
  overflow: hidden;
  color: ${(props) => props.textColor};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  @media screen and (max-width: 320px) {
    max-width: 280px !important;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    max-width: 290px !important;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    max-width: 300px !important;
  }
`;

const SideCross = styled.div`
  background: ${(props) => (props.image ? "none" : "red")};
  position: absolute;
  color: ${(props) => (props.image ? "none" : "white")};
  right: 0;
  font-size: 0.7rem;
  font-weight: 500;
  margin-top: 1.5rem;
  margin-right: -3rem;
  padding: ${(props) => (props.image ? "0" : "10px 50px")};
  transform: ${(props) => (props.image ? "none" : "rotate(45deg)")};
`;
const SideCrossImage = styled.div`
  background-color: red;
  padding: 15px 80px;
  right: 0;
  position: absolute;
  margin-top: 1.5rem;
  margin-right: -2.4rem;

  transform: rotate(45deg);
  img {
    position: absolute;
    max-width: 100%;
    height: 70px;
    margin-top: -2rem;
    margin-left: -2rem;
  }
`;

const PlanHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 0rem;
  text-align: left !important;

  color: ${(props) => props.headColor || "#0d9efa"} !important;
  padding: 40px 20px;
  @media screen and (max-width: 320px) {
    font-size: 2rem;
    padding: 0 20px;
    font-weight: 600;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2.2rem;
    padding: 0 20px;
    font-weight: 600;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2.5rem;
    padding: 0 20px;
    font-weight: 600;
  }
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
  justify-content: center;
  display: flex;
  gap: 5px;
  align-items: center;
  text-align: center;

  article {
    color: ${(props) => props.textColor};
    font-size: 0.8rem;
    font-weight: 400;
    margin-right: 5px;
    text-decoration: line-through;
  }

  span {
    color: ${(props) => props.textColor};
    font-size: 1rem;
    font-weight: 700;
    margin-right: 5px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  padding: 0px 10px;
  margin-bottom: 0 !important;
  line-height: 0.5;
  color: #0d9efa;
  @media screen and (max-width: 320px) {
    font-size: 1.8rem;
    line-height: 0.9;
    padding: 0px 5px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2.2rem;
    line-height: 0.9;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2.3rem;
    line-height: 0.9;
  }
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  padding: 0 60px;
  margin-bottom: 20px;
  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
    padding: 0 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.8rem;
    padding: 0 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.8rem;
    padding: 0 20px;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin: 0 40px;
  font-weight: 100;
  padding: 6px 1px;
  margin-bottom: 1rem;
  border-top: 1px solid ${(props) => props.textColor};
  color: ${(props) => props.textColor};
  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
    margin: 0 20px;
    font-weight: 100;
    padding: 6px 1px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.7rem;
    margin: 0 20px;
    font-weight: 100;
    padding: 6px 1px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.8rem;
    margin: 0 20px;
    font-weight: 100;
    padding: 6px 1px;
  }
  span {
    color: ${(props) => props.textColor};
    font-weight: 400;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  width: 100%;
  padding: 0 0 0 40px;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  margin: 0.2rem 0;
  font-size: 0.8rem;
  font-weight: 400;

  .icon {
    margin-right: 0.5rem;
    color: ${(props) => props.iconColor};
  }
`;

const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const JoinButton = styled.button`
  position: relative;
  background-color: ${(props) => props.buttonColor};
  color: ${(props) => props.textButColor};
  padding: 0.75rem 2rem;
  border: none;
  font-weight: 100;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease;
  margin: 0 !important;

  &:hover {
    background-color: #121027;
    color: white;
    transform: scale(1.05);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: rgba(242, 47, 47, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ${rippleAnimation} 2s infinite;
    z-index: 1;
  }
`;

const Note = styled.p`
  font-size: 0.5rem;
  color: ${(props) => props.textColor || "#515151"};

  span {
    font-weight: 700;
    color: ${(props) => props.textColor || "#515151"};
  }
`;

const subscriptionPlans = [
  {
    crossText: "Popular by Choice",
    header: "Crypto",
    originalPrice: "$25",
    discountedPrice: "$15",
    priceUnit: "/month",
    description:
      "Explore premier investment opportunities in cryptocurrencies like Bitcoin, Ethereum, and more in as little as 48 hours even if you have zero knowledge on cryptocurrencies.",
    features: [
      "Start in 30 seconds",
      "No experience required",
      "Retroactive & FREE Airdrops",
      "High probability trades only",
      "Crypto trading course",
      "Weekly AMA session",
      "85% success rate",
      "24/7 live support",
    ],
    backgroundColor: "#f0f2f5",
    textColor: "#000000",
    buttonColor: "#0d9efa",
    headColor: "#0d9efa",
    textButColor: "#f0f2f5",
  },
  {
    crossText: " Most Demanded",
    header: "Forex",
    originalPrice: "$30",
    discountedPrice: "$25",
    priceUnit: "/month",
    description:
      "Unveil a world of smart investments with Gold, the Dollar, and the Euro. Your diversified portfolio awaits ",
    features: [
      "Start in 30 seconds",
      "No experience required",
      "High probability trades only",
      "Risk management techniques",
      "500-11000 PIPS monthly",
      "Weekly AMA session",
      "89% success rate",
      "24/7 live support",
    ],
    backgroundColor: "#0d9efa",
    textColor: "#f0f2f5",
    buttonColor: "#f0f2f5",
    headColor: "#f0f2f5",
    textButColor: "#0d9efa",
  },
  {
    crossText: "Most Popular",
    header: "Stock",
    originalPrice: "$50",
    discountedPrice: "$30",
    priceUnit: "/month",
    description:
      "Discover the most popular acummulated stocks & options from big players and top market makers, use the best entry  and exit strategy that increases your Investment ",
    features: [
      "Start in 30 seconds",
      "No experience required",
      "High probability trades only",

      "30% - 300% ROI monthly",
      "Weekly AMA session",
      "85% success rate",
      "24/7 live support",
    ],
    backgroundColor: "#113B8E",
    textColor: "#f0f2f5",
    buttonColor: "#f0f2f5",
    headColor: "#f0f2f5",
    textButColor: "#113B8E",
  },
  {
    // crossText: editorChoiceImage,
    header: "Full Access",
    originalPrice: "$199",
    discountedPrice: "$60",
    priceUnit: "/month",
    description:
      "Discover the most popular accumulated stocks & options from big players and top market makers, use the best entry  and exit strategy that increases your investment.",
    features: [
      "Start in 30 seconds",
      "No experience required",
      "High probability trades only",
      "FULL Access to all CC have for you",
      "Private chat with mentors",
      "Weekly AMA session",
      "95% success rate",
      "24/7 live support",
    ],
    backgroundColor: "#EFD8A3",
    textColor: "#000000",
    buttonColor: "#f0f2f5",
    headColor: "#000000",
    textButColor: "#000000",
  },
];

const SubscriptionPlans = () => {
  useBottomToTopSwipe(".bottom-top");
  return (
    <Container>
      <Content>
        <StarsBackground />
        <Heading className="bottom-top">Subscription Plans</Heading>
        <SubHeading className="bottom-top">
          Grow & multiply your income with our proven financial plans
          specifically designed for you!
        </SubHeading>
        {subscriptionPlans.map((plan, index) => (
          <SubscriptionWrapper
            key={index}
            backgroundColor={plan.backgroundColor}
            textColor={plan.textColor}
          >
            {typeof plan.crossText === "string" ? (
              <SideCross>{plan.crossText}</SideCross>
            ) : (
              <>
                <SideCrossImage>
                  <img
                    src={editorChoiceImage}
                    alt="Editor's Choice"
                    style={{}}
                  />
                </SideCrossImage>
              </>
            )}
            <PlanHeader headColor={plan.headColor}>{plan.header}</PlanHeader>
            <Price textColor={plan.textColor}>
              <article>{plan.originalPrice}</article>
              {plan.discountedPrice} <span>{plan.priceUnit}</span>
            </Price>
            <Description textColor={plan.textColor}>
              {plan.description}
            </Description>
            <FeatureList>
              {plan.features.map((feature, i) => (
                <FeatureItem
                  key={i}
                  headColor={plan.headColor}
                  textColor={plan.textColor}
                >
                  <GiCheckMark className="icon" />
                  {feature}
                </FeatureItem>
              ))}
            </FeatureList>
            <JoinButton
              buttonColor={plan.buttonColor}
              textButColor={plan.textButColor}
            >
              JOIN NOW
            </JoinButton>
            <Note textColor={plan.textColor}>
              <span textColor={plan.textColor}>Cancel anytime.</span> Lock in
              your discount price!
            </Note>
          </SubscriptionWrapper>
        ))}
      </Content>
    </Container>
  );
};

export default SubscriptionPlans;
