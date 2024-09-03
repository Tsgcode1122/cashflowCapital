import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { color, motion } from "framer-motion";
import bg from "../Images/darkb.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
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
const Faqs = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  const toggleFaq = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  const faqs = [
    {
      question: "How does it work?",
      answer:
        "It’s simple! You learn to copy our daily expert trade signals while learning to become an independent trader ",
    },
    {
      question: "How to Start?",
      answer:
        "By simply selecting from our subscription packages specifically designed to serve your specific needs in the financial market. We guarantee your satisfaction on every plan. ",
    },
    {
      question: "How to invite friends?",
      answer:
        "By becoming our students community, you directly get access to invite friends to cashflow capital and earn 50% direct commissions.",
    },
    {
      question: "How much can i earn without investing?",
      answer:
        "You can earn up to $25 - $2500+ from Affliate commissions and $100 - $5000 from airdrops tasks to start investing.",
    },
    {
      question: "Who is Cashflow capital for?",
      answer: "Anyone looking to make generational wealth online.",
    },
    {
      question: "What do i need to do?",
      answer:
        "You only need to take action by following our experts guidance and instructions.",
    },
    {
      question: "Do i learn to trade?",
      answer:
        "Yes! you learn to become your own independent trader while you earn from our experts trade signals.",
    },
    {
      question: "Can i start with zero Knowledge",
      answer:
        "Absolutely, Cashflow capital is for beginners friendly, you can learn to trade the financial  market even with zero knowledge. ",
    },
  ];

  return (
    <>
      <FaqsContainer>
        <Contents>
          <Title>FAQs</Title>

          {faqs.map((faq, index) => (
            <FaqItem key={index}>
              <Question onClick={() => toggleFaq(index)}>
                {faq.question}
                <IconWrapper>
                  {selectedFaq === index ? <MinusOutlined /> : <PlusOutlined />}
                </IconWrapper>
              </Question>
              <Answer
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: selectedFaq === index ? "auto" : 0,
                  opacity: selectedFaq === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </Answer>
            </FaqItem>
          ))}
        </Contents>
      </FaqsContainer>
    </>
  );
};

export default Faqs;
const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
  text-align: center;
`;

const Contents = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 2rem;
  img {
    max-width: 100%;
    width: 70%;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 320px) {
    padding: 1rem 2rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1.5rem 2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1.5rem 2rem;
  }
`;
const FaqsContainer = styled.div`
  position: relative;
  color: white;
  background: url(${bg}) no-repeat center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;

  background-position: 10% top;
  background-size: 100%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 320px) {
    border-radius: 30px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    border-radius: 40px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    border-radius: 40px;
  }
  @media screen and (min-width: 800px) {
    margin: 2rem 4rem;
  }
  @media screen and (min-width: 1000px) {
    margin: 2rem 6rem;
  }
  @media screen and (min-width: 1200px) {
    margin: 2rem 16rem;
  }
  @media screen and (min-width: 1480px) {
    margin: 2rem 18rem;
  }
`;

const FaqItem = styled.div`
  margin-bottom: 1rem;

  border-bottom: 1px solid white;
`;

const Question = styled.div`
  padding: 1rem 0;

  color: white;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
    padding: 0.8rem 0;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
    padding: 0.9rem 0;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem 0;
    font-size: 1rem;
  }
`;

const Answer = styled(motion.div)`
  overflow: hidden;
  padding: 0 1rem;

  border-radius: 4px;

  p {
    margin: 0;
    padding: 0rem 0.1rem 1rem 0.1rem;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  svg {
    color: #4ea3f6;
    font-size: 20px;
  }
`;
