import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, Checkbox, message } from "antd";
import axios from "axios";

import bg from "../Images/darkb.png";
import GlowingDivider from "./GlowingDivider";
const Container = styled.div`
  background: url(${bg}) no-repeat center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  color: white;
`;
const Content = styled.div`
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;

  align-items: center;
`;
const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      message.error("Please enter your email address.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("https://your-backend-api.com/subscribe", {
        email,
        notify,
      });
      message.success("Subscribed successfully!");
      setEmail("");
      setNotify(false);
    } catch (error) {
      message.error("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <FormContainer>
          <Title>
            Sign up for our newsletter and get the latest market insights.
          </Title>
          <InputWrapper noStyle>
            <StyledInput
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <StyledButton
              type="primary"
              loading={loading}
              onClick={handleSubmit}
            >
              Subscribe
            </StyledButton>
          </InputWrapper>
          <CheckboxWrapper>
            <StyledCheckbox
              checked={notify}
              onChange={(e) => setNotify(e.target.checked)}
            ></StyledCheckbox>
            <span>
              Also notify me about all news, updates & more from Cashflow
              Capital
            </span>
          </CheckboxWrapper>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default NewsletterForm;

const FormContainer = styled.div`
  background-color: #08122a;
  padding: 2rem 2rem;
  border-radius: 8px;
  max-width: 500px;
  border: 1px solid #4ea3f6;
  margin: 2rem 2rem;
  @media screen and (max-width: 320px) {
    padding: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem;
  }
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: white;
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.2rem;
  }
  -webkit-text-stroke: 0.5px #4ea3f6;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-radius: 4px;
  background: #000000;
  padding: 0.3rem;
  border: 1px solid #4ea3f6;
`;

const StyledInput = styled(Input)`
  flex: 1;
  margin-right: 1rem;
  border-radius: 4px;
  padding: 0.75rem;
  background-color: transparent; /* Transparent background */
  color: white !important;
  border: none;

  /* Placeholder styling */
  ::placeholder {
    color: white;
    opacity: 0.8;
    font-weight: 100;
    padding-left: 20px;
  }

  /* Specific browser placeholder styling */
  &::-webkit-input-placeholder {
    color: white;
    opacity: 0.8;
    font-weight: 100;
    padding-left: 20px;
  }
  &::-moz-placeholder {
    color: white;
    opacity: 0.8;
    font-weight: 100;
    padding-left: 20px;
  }
  &:-ms-input-placeholder {
    color: white;
    opacity: 0.8;
    font-weight: 100;
    padding-left: 20px;
  }
  &::-ms-input-placeholder {
    color: white;
  }

  /* Remove the background color on hover */
  &:hover {
    background-color: transparent;
  }

  /* Remove the background color on focus */
  &:focus {
    background-color: transparent;
    outline: none; /* Optionally remove the focus outline */
    box-shadow: none; /* Remove default focus shadow */
  }
`;

const StyledButton = styled(Button)`
  padding: 0.75rem 1rem;
  background-color: #4ea3f6;
  border: none;
  &:hover {
    background-color: #4ea3f6;
  }
`;

const CheckboxWrapper = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  gap: 20px;
  span {
    font-weight: 100;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    border-color: #4ea3f6;
    height: 20px;
    width: 20px;
    background-color: #1f2b3b;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #4ea3f6;
    border-color: #4ea3f6;
  }
  span {
    color: white;
  }
`;
