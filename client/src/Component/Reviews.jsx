import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import trustpilot from "../Images/Trustpilot.png";
import SwipeComponent from "./SwipeComponent";
import { Link } from "react-router-dom";
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  color: #000;
  overflow: hidden;
  padding-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 3.2rem;
  font-weight: 400;
  padding: 60px 60px 0 60px;
  line-height: 0.9;

  color: #0d9efa;
  margin: 0;
  @media screen and (max-width: 320px) {
    font-size: 2.5rem;
    font-weight: 500;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2.8rem;
    font-weight: 500;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 3rem;
    font-weight: 500;
  }
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  color: black;
  max-width: 280px;

  margin: 5px 0 10px 0;
  font-weight: 400;
  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
    padding: 0 60px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.7rem;
    padding: 0 70px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.7rem;
    padding: 0 70px;
  }
`;

const ReviewCard = styled.div`
  background: #fffefe !important;
  min-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: left;
  margin: 0 5px;
  border-radius: 10px;
  scroll-snap-align: center;
  @media screen and (max-width: 320px) {
    min-width: 250px;
    padding: 8px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    min-width: 250px;
    padding: 8px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    min-width: 250px;
    padding: 8px;
  }
`;

const ReviewText = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.9rem;
  }
`;

const ReviewDate = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 5px;
`;

const Reviewer = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 700;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.9rem;
  }
`;

const PriceSection = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SlideDiv = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 20px;
  width: 100%;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SpanReview = styled.div`
  background: #f0f2f5;
  border-radius: 10px;
  padding: 20px 30px;
`;

const Price = styled(Link)`
  text-decoration: none;
  padding: 12px 30px;
  font-size: 1.2rem;
  display: inline-block;
  align-items: center;
  color: white;
  position: relative;
  background-color: #0d9efa;
  box-shadow: 0 0 15px rgba(6, 151, 241, 0.7);
  border: none;
  border-radius: 25px;
  cursor: pointer;
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
  @media screen and (max-width: 320px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.1rem;
    padding: 10px 15px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.1rem;
    padding: 10px 20px;
  }
  img {
    max-width: 100%;
    height: 20px;
  }

  &:hover {
    background-color: #121027;
    color: white;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  span {
    text-decoration: line-through;
    color: #f50057;
  }
`;

const Styledp = styled.p`
  /* margin-top: 1px; */
  span {
    font-weight: 700;
  }
  font-size: 0.6rem;
  font-weight: 400;
`;

const Reviews = () => {
  const reviews = [
    {
      text: "Great platform for up skilling with technical skills, best part is that i get to make money while been tutored",
      date: "Feb 03, 2024",
      reviewer: "Victor",
      rating: 5,
    },
    {
      text: "I recommend for anyone looking to become proficient and profitable in the financial markets",
      date: "Dec 10, 2023",
      reviewer: "Solomon Nathaniel",
      rating: 4.5,
    },
    {
      text: "I never thought i would get as much insight in this community, pretty easy onboarding and beginner friendly",
      date: "November 05, 2023",
      reviewer: "John",
      rating: 4,
    },
  ];

  return (
    <Container>
      <Heading>Reviews & Testimonials</Heading>
      <SwipeComponent direction="left-to-right">
        <SubHeading>
          We have a proven track record and we are trusted by our student
          community.
        </SubHeading>
      </SwipeComponent>
      <SlideDiv>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <SpanReview>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {[...Array(5)].map((_, i) => {
                  if (i < Math.floor(review.rating)) {
                    return (
                      <StarFilled
                        key={i}
                        style={{
                          color: "#ffffff",
                          background: "#0AB57B",
                          marginRight: "2px",
                        }}
                      />
                    );
                  } else if (i < review.rating) {
                    return (
                      <StarFilled
                        key={i}
                        style={{
                          color: "#ffffff",
                          background:
                            "linear-gradient(90deg, #0AB57B 50%, #ccc 50%)",
                          marginRight: "2px",
                        }}
                      />
                    );
                  } else {
                    return (
                      <StarOutlined
                        key={i}
                        style={{
                          color: "#ffffff",
                          background: "#ccc",
                          marginRight: "2px",
                        }}
                      />
                    );
                  }
                })}
                <img
                  src={trustpilot}
                  alt="Trustpilot"
                  style={{
                    marginLeft: "auto",
                    maxWidth: "100%",
                    height: "20px",
                  }}
                />
              </div>
              <ReviewText>"{review.text}"</ReviewText>
              <ReviewDate>{review.date}</ReviewDate>
              <Reviewer>{review.reviewer}</Reviewer>
            </SpanReview>
          </ReviewCard>
        ))}
      </SlideDiv>
      <PriceSection>
        <Price to="/subscription">
          Get Started - <span>$199.99</span> $49.99
        </Price>
        <Styledp>
          <span>Full Access! Cancel anytime.</span> Lock in your discount price!
        </Styledp>
      </PriceSection>
    </Container>
  );
};

export default Reviews;
