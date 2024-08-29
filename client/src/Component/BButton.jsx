import styled, { keyframes } from "styled-components";
import { FaCheck } from "react-icons/fa";

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px #0d9efa, 0 0 1px #0d9efa, 0 0 2px #0d9efa, 0 0 1px #0d9efa;
  }
  50% {
    box-shadow: 0 0 10px #0d9efa, 0 0 20px #0d9efa, 0 0 4px #0d9efa, 0 0 6px #0d9efa;
  }
`;

const BButton = styled.button`
  padding: 12px 30px;
  font-size: 1.2rem;
  display: flex;
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

  border: 1px solid #379ddd;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  /* animation: ${glow} 2s infinite; */
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 30px;
    /* background: linear-gradient(90deg, transparent, #0d9efa, transparent); */
  }

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
