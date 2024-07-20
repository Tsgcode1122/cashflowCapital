import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

const Overview = () => {
  return (
    <Container>
      <Welcome />
    </Container>
  );
};

const Container = styled.body`
  position: relative;
  background-color: transparent;
`;
export default Overview;
