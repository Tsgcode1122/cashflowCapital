import styled, { keyframes } from "styled-components";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Heading = styled.h3`
  font-size: 2.2rem;
  font-weight: bolder;
  padding: 0 !important;
  margin-bottom: 15px;
  color: white;
  text-align: center;
  line-height: 1;
  @media screen and (max-width: 320px) {
    font-size: 1.7rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 3rem;
  }
`;

export default Heading;
