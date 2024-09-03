import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spin, Alert } from "antd";
import styled, { keyframes } from "styled-components";
import use from "../Images/uses.png";
import useLead from "../Images/usess.png";

const LeadershipBoardContainer = styled.div`
  background: #0f1a36;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: white;
  align-items: center;
  text-align: center;
  margin: 0 !important;
  padding: 20px 0 0;
`;

const LeaderTopCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LeaderImageTop = styled.img`
  ${(props) =>
    props.index === 0
      ? `
    width: 100px;
    height: 100px;
  `
      : `
    width: 60px;
    height: 60px;
  `}
  border-radius: 50%;
  margin-bottom: 10px;
  @media screen and (max-width: 320px) {
    ${(props) =>
      props.index === 0
        ? `
    width: 70px;
    height: 70px;
  `
        : `
    width: 50px;
    height: 50px;
  `}
  }
  @media (min-width: 321px) and (max-width: 399px) {
    gap: 10px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    gap: 10px;
  }
`;
const LeaderImage = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid #959dae;
  background-color: #6d7b9c;
  border-radius: 50%;
  @media screen and (max-width: 320px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 40px;
    height: 40px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

const LeaderInfoTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.index === 0 ? "20px" : "15px")};
  @media screen and (max-width: 320px) {
    gap: 8px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    gap: 10px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    gap: 10px;
  }
`;

const LeaderNameTop = styled.span`
  font-size: ${(props) => (props.index === 0 ? "20px" : "15px")};
  @media screen and (max-width: 320px) {
    font-size: ${(props) => (props.index === 0 ? "12px" : "10px")};
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: ${(props) => (props.index === 0 ? "15px" : "12px")};
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: ${(props) => (props.index === 0 ? "15px" : "12px")};
  }
`;

const LeaderDetailsTop = styled.span`
  color: white;
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 12px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 14px;
  }
`;

const Circle = styled.div`
  background: #745274;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  margin-right: ${(props) => (props.index === 1 ? "-10px" : "0px")};
  margin-left: ${(props) => (props.index === 2 ? "-10px" : "0px")};
  width: ${(props) => (props.index === 0 ? "110px" : "60px")};
  height: ${(props) => (props.index === 0 ? "110px" : "60px")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1px;
  @media screen and (max-width: 320px) {
    padding: 20px;
    margin-right: ${(props) => (props.index === 1 ? "-15px" : "0px")};
    margin-left: ${(props) => (props.index === 2 ? "-15px" : "0px")};
    width: ${(props) => (props.index === 0 ? "60px" : "30px")};
    height: ${(props) => (props.index === 0 ? "60px" : "30px")};
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: ${(props) => (props.index === 0 ? "80px" : "40px")};
    height: ${(props) => (props.index === 0 ? "80px" : "40px")};
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: ${(props) => (props.index === 0 ? "80px" : "40px")};
    height: ${(props) => (props.index === 0 ? "80px" : "40px")};
  }
`;

const PositionNumber = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
  @media screen and (max-width: 320px) {
    font-size: 19px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 20px;
  }
`;

const Bottom = styled.div`
  background: #6d7b9c;
  padding: 50px 20px;
  border-radius: 102px 102px 0 0;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 320px) {
    padding: 20px 10px;
    border-radius: 40px 42px 0 0;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 30px 10px;
    border-radius: 70px 72px 0 0;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 30px 10px;
    border-radius: 80px 82px 0 0;
  }
`;
const Nimage = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const LeaderInfoTopBelow = styled.div`
  display: flex;
  width: 80%;

  text-align: center;
  justify-content: space-between;
  align-items: center;
`;
const LeaderCard = styled.div`
  display: flex;
  align-items: center;

  background: #27314a;
  border-radius: 50px;
  padding: 5px 30px;
  color: #ffffff;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  gap: 40px;
`;
const LeadershipBoard = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "https://cashflowcapital.onrender.com/api/userDashboard/all",
        );
        const sortedData = response.data.sort(
          (a, b) => b.referredTotalCount - a.referredTotalCount,
        );
        setUserDetails(sortedData);
      } catch (error) {
        setError("Error fetching user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <Spin tip="Loading..." />;
  if (error) return <Alert message={error} type="error" />;

  return (
    <LeadershipBoardContainer>
      <h2>Leadership Board</h2>
      <Top>
        {userDetails.slice(0, 3).map((user, index) => {
          const firstName = user.userName.split(" ")[0];
          return (
            <LeaderTopCard
              key={user.userId}
              index={index}
              style={{ order: index === 1 ? -1 : 0 }}
            >
              <Circle index={index}>
                <PositionNumber>{index + 1}</PositionNumber>
                <LeaderImageTop
                  src={index === 0 ? useLead : use}
                  index={index}
                />
              </Circle>
              <LeaderInfoTop>
                <LeaderNameTop index={index}>{firstName}</LeaderNameTop>
                <LeaderDetailsTop>
                  {/* remember to always upate this */}$
                  {user.referredTotalCount * 10}
                </LeaderDetailsTop>
                {/* <LeaderDetailsTop>{user.referredTotalCount}</LeaderDetailsTop> */}
              </LeaderInfoTop>
            </LeaderTopCard>
          );
        })}
      </Top>
      <Bottom>
        {userDetails.slice(3).map((user, index) => {
          const firstName = user.userName.split(" ")[0];
          return (
            <LeaderCard key={user.userId}>
              <Nimage>
                <PositionNumber>{index + 4}</PositionNumber>
                <LeaderImage src={use} />
              </Nimage>
              <LeaderInfoTopBelow>
                <LeaderNameTop>{firstName}</LeaderNameTop>
                <LeaderDetailsTop>
                  ${user.referredTotalCount * 10}
                </LeaderDetailsTop>
              </LeaderInfoTopBelow>
            </LeaderCard>
          );
        })}
      </Bottom>
    </LeadershipBoardContainer>
  );
};

export default LeadershipBoard;
