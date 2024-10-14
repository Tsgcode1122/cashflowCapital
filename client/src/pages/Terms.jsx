import React, { useEffect } from "react";
import styled from "styled-components";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <TermsWrapper>
      <h1>Terms and Conditions</h1>
      <Section>
        <h2>Introduction</h2>
        <p>
          Welcome to CashFlowCapital! By subscribing to our trading signal
          service, you agree to the terms and conditions outlined below. These
          terms apply to all subscribers and affiliates.
        </p>
      </Section>

      <Section>
        <h2>Subscription Terms</h2>
        <p>
          CashFlowCapital offers a monthly subscription for access to trading
          signals. By subscribing, you agree to pay the monthly fee, which will
          be automatically charged to your account. The subscription will renew
          each month unless canceled.
        </p>
        <p>
          To cancel your subscription, you must provide notice at least 7 days
          before the next billing cycle to avoid being charged for the next
          month.
        </p>
      </Section>

      <Section>
        <h2>Referral Program</h2>
        <p>
          Our referral program allows you to earn rewards for bringing in new
          subscribers. For every user who subscribes using your referral link,
          you will receive a percentage of their monthly fee as a reward.
          Referral rewards are paid out monthly.
        </p>
      </Section>

      <Section>
        <h2>Refund Policy</h2>
        <p>
          All payments are non-refundable. We do not offer refunds for any
          subscriptions or referral rewards. Please review your subscription
          carefully before committing.
        </p>
      </Section>

      <Section>
        <h2>Changes to Terms</h2>
        <p>
          CashFlowCapital reserves the right to modify or update these terms at
          any time. Any changes will be communicated via email or through our
          website, and it is your responsibility to review the updated terms.
        </p>
      </Section>
    </TermsWrapper>
  );
};

export default Terms;

// Styled Components

const TermsWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  color: #ffffff;
  line-height: 1.6;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2em;
    color: #ffffff;
    @media (max-width: 480px) {
      font-size: 1.5em;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px 1.5rem;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 1.5em;
    color: #ffffff;
    margin-bottom: 10px;
    @media (max-width: 480px) {
      font-size: 1em;
    }
  }

  p {
    font-size: 1.1em;
    color: #d9d9d9;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.3em;
    }

    p {
      font-size: 1em;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.1em;
    }

    p {
      font-size: 0.95em;
    }
  }
`;
