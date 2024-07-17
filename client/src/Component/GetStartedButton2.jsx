import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

const Button2 = styled.button`
  padding: 12px 30px;
  font-size: 1.4rem;
  opacity: 0;
  align-items: center;
  gap: 10px;
  color: #0d9efa;
  background-color: transparent;
  border: 2px solid #0d9efa;
  border-radius: 25px;
  cursor: pointer;

  transition:
    background-color 3s ease,
    transform 3s ease,
    opacity 3s ease;

  bottom: 20px;
  right: 20px;
  z-index: 1000;
  transform: scale(0.7);

  img {
    max-width: 100%;
    height: 20px;
    --animate-duration: 4.5s;
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
    padding: 12px 40px;
    font-size: 1.2rem;
  }
`;

const GetStartedButton2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const button = document.querySelector("#getStartedButton");

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
    });

    if (button) {
      observer.observe(button);
    }

    return () => {
      if (button) {
        observer.unobserve(button);
      }
    };
  }, []);

  return (
    <Container>
      <Button2
        id="getStartedButton"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(0.8)" : "scale(0.5)",
        }}
      >
        Let's Get Started
      </Button2>
    </Container>
  );
};

export default GetStartedButton2;
