import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
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
const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressWrapper = styled.div`
  width: 100%;
  margin: 0rem 2rem 4rem 2rem;
  background-color: gray;
  border-radius: 10px;
  overflow: hidden;
  height: 8px;
`;

const ProgressBarFill = styled(motion.div)`
  height: 100%;
  background-color: #4ea3f6;
  border-radius: 10px;
`;

const ProgressBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }, // Adjust the threshold as needed
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  return (
    <Container ref={progressBarRef}>
      <ProgressWrapper>
        <ProgressBarFill
          initial={{ width: "0%" }}
          animate={{ width: isVisible ? "95%" : "0%" }}
          transition={{ duration: 2 }}
        />
      </ProgressWrapper>
    </Container>
  );
};

export default ProgressBar;
