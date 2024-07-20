import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography, Image, Result } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

const EarningsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* background: linear-gradient(135deg, #0f1a36, #020b19); */
  color: white;
`;

const EarningsCard = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: white;

  .ant-card-body {
    padding: 20px;
  }
`;

const StyledImage = styled(Image)`
  max-width: 100px;
  margin: 10px 0;
`;

const TotalEarnings = ({ userId }) => {
  const [earnings, setEarnings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTotalEarnings = async () => {
      try {
        const response = await axios.get(
          `https://cashflowcapital.onrender.com/api/withdrawals/total-earnings`,
          {
            params: { userId },
          },
        );
        setEarnings(response.data.totalEarnings);
      } catch (error) {
        setError("Error fetching total earnings");
      } finally {
        setLoading(false);
      }
    };

    fetchTotalEarnings();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <EarningsContainer>
      {earnings === 0 ? (
        <Result
          status="warning"
          title="Oops!"
          subTitle="You have not earned because you haven't referred anyone. Start referring to earn now!"
          icon={
            <StyledImage src="https://cdn-icons-png.flaticon.com/512/848/848043.png" />
          }
        />
      ) : (
        <EarningsCard>
          <StyledImage src="https://cdn-icons-png.flaticon.com/512/2951/2951757.png" />
          <Title level={3}>Your Total Earnings</Title>
          <Text style={{ fontSize: "24px", fontWeight: "bold" }}>
            ${earnings}
          </Text>
          <Text>
            Keep referring to earn more! Share your referral link with friends
            and family.
          </Text>
        </EarningsCard>
      )}
    </EarningsContainer>
  );
};

export default TotalEarnings;
