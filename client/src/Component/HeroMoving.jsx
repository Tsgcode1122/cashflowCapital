import React from "react";
import styled, { keyframes } from "styled-components";
import b1 from "../Images/whoop.png";
import b2 from "../Images/bybit.png";
import b3 from "../Images/stake.png";
import b4 from "../Images/kucoin.png";

const HeroMoving = () => {
  return (
    <>
      <ImageWrapper>
        <MovingImage>
          <ImageContainer>
            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />

            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />

            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />

            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />

            <img src={b2} />
            <img src={b3} />
            <img src={b4} />

            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />

            <img src={b2} />
            <img src={b3} />
            <img src={b4} />

            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />
          </ImageContainer>
        </MovingImage>
      </ImageWrapper>
    </>
  );
};

// Keyframes for the animation
const moveRightToLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-500%);
  }
`;

const ImageWrapper = styled.div`
  margin-top: -3px !important;
  overflow-x: hidden;
  padding: 10px;
  background: white !important;
`;
const MovingImage = styled.div`
  animation: ${moveRightToLeft} 75s linear infinite;

  img {
    max-width: 100%;
    height: 40px;

    min-width: 50px;
    margin-right: 50px;

    @media screen and (max-width: 320px) {
      height: 30px;
      min-width: 30px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 30px;
      min-width: 30px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 30px;
      min-width: 30px;
    }
  }
`;
const ImageContainer = styled.div`
  display: flex;
  width: calc(500px * 9 + 12px * 8);
`;
const moveLeftToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export default HeroMoving;
