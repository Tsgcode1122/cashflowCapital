// GlowingDivider.js
import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
 
  0% {
      background-position: 0% 50%;
    /* box-shadow: 0 0 5px #0d9efa, 0 0 10px #0d9efa, 0 0 5px #0d9efa, 0 0 20px #0d9efa; */
  }
  50% {
       background-position: 100% 50%;
    /* box-shadow: 0 0 10px #0d9efa, 0 0 20px #0d9efa, 0 0 10px #0d9efa, 0 0 10px #0d9efa; */
  }
  10% {
     background-position: 0% 10%;
    box-shadow: 0 0 10px #0d9efa;
  }
`;

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background: rgba(0, 0, 0, 0.4); */
`;

const Divider = styled.div`
  width: 70%;
  max-width: 600px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0d9efa 50%, transparent);
  background-size: 100% 500%;
  animation: ${glow} 4s infinite;
`;

const GlowingDivider = () => {
  return (
    <DividerWrapper>
      <Divider />
    </DividerWrapper>
  );
};

export default GlowingDivider;
