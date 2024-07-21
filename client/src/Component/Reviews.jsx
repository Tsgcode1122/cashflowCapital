import React from "react";
import styled from "styled-components";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import trustpilot from "../Images/Trustpilot.png";
import SwipeComponent from "./SwipeComponent";
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
  font-weight: 100;
  padding: 60px 60px 0 60px;
  line-height: 0.9;
  font-weight: 100;
  color: #1f4ca7;
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
  color: #555;
  padding: 0 80px;
  margin-bottom: 40px;
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
  margin-top: 40px;
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

const Price = styled.div`
  padding: 12px 30px;
  font-size: 1.2rem;
  display: inline-block;
  align-items: center;
  color: white;
  box-shadow:
    0 0 10px #0a4a72,
    0 0 20px #0d9efa,
    0 0 4px #0a4a72,
    0 0 6px #0d9efa;
  background-color: #0d9efa;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
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
    font-weight: 500;
  }
  font-size: 0.6rem;
  font-weight: 200;
`;

const Reviews = () => {
  const reviews = [
    {
      text: "A very good site, I have been using it for a long time, they provide very good support",
      date: "September 03, 2023",
      reviewer: "MDMONIRUL",
      rating: 5,
    },
    {
      text: "A very good site, I have been using it for a long time, they provide very good support",
      date: "October 10, 2023",
      reviewer: "JANE DOE",
      rating: 4.5,
    },
    {
      text: "A very good site, I have been using it for a long time, they provide very good support",
      date: "November 05, 2023",
      reviewer: "JOHN SMITH",
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
        <Price>
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
