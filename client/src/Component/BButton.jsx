import styled, { keyframes } from "styled-components";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px #0d9efa, 0 0 1px #0d9efa, 0 0 2px #0d9efa, 0 0 1px #0d9efa;
  }
  50% {
    box-shadow: 0 0 10px #0d9efa, 0 0 20px #0d9efa, 0 0 4px #0d9efa, 0 0 6px #0d9efa;
  }
`;
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
const BButton = styled(Link)`
  text-decoration: none;
  padding: 12px 30px;
  font-size: 1.2rem;
  display: inline-block;

  align-items: center;
  gap: 10px;
  color: white;
  background: linear-gradient(
    20deg,
    #0796ee,
    #057bc4,
    #0d9efa,
    #0a7cc2,
    #0697f1
  );
  box-shadow: 0 0 15px rgba(6, 151, 241, 0.7);
  border: 1px solid #379ddd;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  position: relative;
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
  /* animation: ${glow} 2s infinite; */

  img {
    max-width: 100%;
    height: 15px;
    --animate-duration: 9.5s;
    @media screen and (max-width: 320px) {
      height: 10px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 12px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 12px;
    }
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
    font-size: 0.9rem !important;
    padding: 11px 20px !important;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 11px 20px !important;
    font-size: 1.1rem !important;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 15px 25px !important;
    font-size: 1.1rem !important;
  }
`;

export default BButton;
