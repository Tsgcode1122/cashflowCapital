import styled, { keyframes } from "styled-components";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px #0d9efa, 0 0 1px #0d9efa, 0 0 2px #0d9efa, 0 0 1px rgb(13, 158, 250);
  }
  50% {
    box-shadow: 0 0 10px #0d9efa, 0 0 20px #0d9efa, 0 0 4px #0d9efa, 0 0 6px #0d9efa;
  }
`;

const Design = styled.span`
  display: inline-block;

  background: linear-gradient(
    90deg,
    transparent,
    transparent,
    transparent,
    #0c364f,
    #0d9efa
  );
  padding-right: 10px;
  border-radius: 5px;

  overflow: hidden;

  @media screen and (max-width: 320px) {
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;

export default Design;
