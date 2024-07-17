import React from "react";
import styled, { keyframes } from "styled-components";

const moveStars = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-700px);
  }
`;

const moveArrows = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

const Star = styled.div`
  width: 1px;
  height: 1px;
  background: white;
  position: absolute;
  top: ${() => Math.random() * 100}%;
  left: ${() => Math.random() * 100}%;
  animation: ${moveStars} ${() => Math.random() * 10 + 5}s linear infinite;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 5px solid white;
  position: absolute;
  top: ${() => Math.random() * 100}%;
  left: ${() => Math.random() * 100}%;
  animation: ${moveArrows} 2s ease-in-out infinite;
`;

const Background = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  overflow: hidden;
  /* z-index: -1; */
`;

const StarsBackground = () => {
  const starElements = Array.from({ length: 100 }, (_, index) => (
    <Star key={index} />
  ));
  const arrowElements = Array.from({ length: 3 }, (_, index) => (
    <Arrow key={index} />
  ));

  return <Background>{starElements.concat(arrowElements)}</Background>;
};

export default StarsBackground;
