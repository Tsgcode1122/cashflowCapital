import React, { useEffect } from "react";
import styled from "styled-components";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PolicyWrapper>
      <h1>Privacy Policy</h1>

      <Section>
        <h2>Introduction</h2>
        <p>
          CashFlowCapital is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard your personal
          information when you subscribe to our services or engage with our
          website.
        </p>
      </Section>

      <Section>
        <h2>Information We Collect</h2>
        <p>
          We may collect personal information, including your name, email
          address, payment information, and other relevant details when you
          subscribe to our trading signal service or referral program.
        </p>
      </Section>

      <Section>
        <h2>How We Use Your Information</h2>
        <p>
          Your personal data will be used to manage your subscription, provide
          access to trading signals, and participate in our referral program. We
          may also use your information to improve our services and send you
          updates related to CashFlowCapital.
        </p>
      </Section>

      <Section>
        <h2>Data Security</h2>
        <p>
          We prioritize the security of your personal data and use
          industry-standard measures to protect it. However, no online
          transmission is entirely secure. By using our services, you
          acknowledge and accept this inherent risk.
        </p>
      </Section>

      <Section>
        <h2>Third-Party Sharing</h2>
        <p>
          We do not sell or share your personal data with third parties, except
          as required to process payments or comply with legal obligations.
        </p>
      </Section>

      <Section>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, modify, or delete your personal data at
          any time. Please contact us for any data requests or questions
          regarding your privacy.
        </p>
      </Section>

      <Section>
        <h2>Changes to This Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy periodically. Any
          changes will be posted on our website, and continued use of our
          services implies your acceptance of the updated terms.
        </p>
      </Section>
    </PolicyWrapper>
  );
};

export default Policy;

// Styled Components

const PolicyWrapper = styled.div`
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
      font-size: 1.5rem;
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
    font-size: 1em;
    color: #ffffff;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.8em;
    color: #bcbcbc;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.2em;
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
