import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar, Tooltip, Alert, Modal, Button } from "antd";
import {
  StockOutlined,
  BankOutlined,
  DollarCircleOutlined,
  TrophyOutlined,
  WhatsAppOutlined,
  CustomerServiceOutlined,
  MailOutlined,
  SettingOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUserData } from "../context/UserDataContext";
import WithdrawalForm from "../DashboardModal/WithdrawalForm";
import WithdrawalSummary from "../DashboardModal/WithdrawalSummary";
import TotalEarnings from "../DashboardModal/TotalEarnings";
import LeadershipBoard from "../DashboardModal/LeadershipBoard";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #0f1a36, #020b19);
  color: white;
  @media screen and (max-width: 320px) {
    padding: 20px 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 20px 10px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 20px;
  }
`;

const ProfileLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  text-decoration: none;

  gap: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  @media screen and (max-width: 320px) {
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 100%;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 100%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const WelcomeText = styled.div`
  margin-left: 10px;
  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 14px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 16px;
  }
`;

const Card = styled.div`
  border-radius: 10px;
  align-items: center;
  position: relative;
  margin: 20px 0;
  text-align: center;
  width: 80%;
  z-index: 2;
  @media screen and (max-width: 320px) {
    width: 90%;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 90%;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 90%;
  }
  &::after {
    content: "";
    background-color: #0d9efa;
    height: 80px;
    width: 250px;
    position: absolute;
    bottom: 5px;
    left: 39%;
    transform: rotate(-25deg);
    z-index: -1 !important;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
    @media screen and (max-width: 320px) {
      width: 180px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      width: 200px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      width: 220px;
    }
  }
`;

const Before = styled.div`
  background: rgba(0, 0, 0, 1);
  padding: 50px 30px;
  border-radius: 10px;
  box-shadow:
    0 0 4px #0d9efa,
    0 0 2px #0d9efa,
    0 0 1px #0d9efa,
    0 0 6px #0d9efa;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 320px) {
    padding: 30px 15px;
    font-size: 14px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 40px 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;

const ReferralLinkContainer = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  width: 70%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  color: black;
  @media screen and (max-width: 320px) {
    width: 80%;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 80%;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 80%;
  }
`;

const ReferralContainer = styled.div`
  word-break: break-all;
  max-width: 80%;
`;

const Refer = styled.div`
  font-size: 12px;
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

const CopyIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Amount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
    color: #0d9efa;
  }
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
`;

const FooterIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  width: 80%;
  margin-top: 40px;
  @media screen and (max-width: 320px) {
    width: 90%;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    width: 90%;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 90%;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`;

const FooterIconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  max-width: 120px;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: white !important;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 14px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 14px;
  }
  svg {
    color: white;
    background: #0d9efa;
    padding: 5px;
    font-size: 20px;
    border-radius: 50%;
    box-shadow:
      0 0 4px #e0dfdf,
      0 0 2px #5d5d5d,
      0 0 1px #4e4e4e,
      0 0 6px #b9bbbc;
  }
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    height: 90vh;

    display: flex;
    flex-direction: column;
  }
  .ant-modal-body {
    flex: 1;
    overflow-y: auto;
    margin: 0;
    padding: 0 !important;
  }
`;

const UserDashboard = () => {
  const { userData } = useUserData();
  const [userDashboardDetails, setUserDashboardDetails] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isWithdrawModalVisible, setIsWithdrawModalVisible] = useState(false);
  const [isSummaryModalVisible, setIsSummaryModalVisible] = useState(false);
  const [isTotalEarningsModalVisible, setIsTotalEarningsModalVisible] =
    useState(false);
  const [isLeadershipBoardModalVisible, setIsLeadershipBoardModalVisible] =
    useState(false);
  const userId = userData ? userData._id : null;

  const referral = userDashboardDetails?.referralLink
    ? userDashboardDetails.referralLink
    : "";
  const firstName = userDashboardDetails?.userName
    ? userDashboardDetails.userName.split(" ")[0]
    : "";
  const Initials = userDashboardDetails?.userName
    ? userDashboardDetails.userName
        .split(" ")
        .slice(0, 2)
        .map((name) => name[0])
        .join("")
    : "";

  useEffect(() => {
    const fetchUserDashboardDetails = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `https://cashflowcapital.onrender.com/api/userDashboard/dashboard/${userId}`,
          );
          setUserDashboardDetails(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching user dashboard details:", error);
          setLoading(false);
        }
      }
    };

    fetchUserDashboardDetails();
  }, [userId]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referral);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleWithdrawClick = () => {
    setIsWithdrawModalVisible(true);
  };

  const handleWithdrawModalCancel = () => {
    setIsWithdrawModalVisible(false);
  };

  const handleSummaryClick = () => {
    setIsSummaryModalVisible(true);
  };

  const handleSummaryModalCancel = () => {
    setIsSummaryModalVisible(false);
  };
  const handleTotalEarningsClick = () => {
    setIsTotalEarningsModalVisible(true); // Open Total Earnings modal
  };

  const handleTotalEarningsModalCancel = () => {
    setIsTotalEarningsModalVisible(false); // Close Total Earnings modal
  };
  const handleLeadershipBoardClick = () => {
    setIsLeadershipBoardModalVisible(true); // Open Leadership Board modal
  };

  const handleLeadershipBoardModalCancel = () => {
    setIsLeadershipBoardModalVisible(false); // Close Leadership Board modal
  };
  const roundedBalance = (balance) => {
    return Number(balance).toFixed(2);
  };
  return (
    <>
      {userData && (
        <DashboardContainer>
          <Header>
            <UserInfo>
              <Avatar>{Initials} </Avatar>
              <WelcomeText>
                <div>Hello {firstName}</div>
                <div>Welcome, let's earn today!</div>
              </WelcomeText>
            </UserInfo>
            <ProfileLink to="/customer-profile">
              <SettingOutlined /> Profile
            </ProfileLink>
          </Header>

          <Card>
            <Before>
              <Amount>
                <Price>${roundedBalance(userDashboardDetails?.balance)}</Price>
                <p>Available Balance</p>
              </Amount>
              <IconItem onClick={handleWithdrawClick}>
                <BankOutlined
                  style={{
                    fontSize: "20px",
                    color: "white",
                    background: "#0d9efa",
                    padding: "10px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
                <div>Withdraw</div>
              </IconItem>
            </Before>
          </Card>

          <ReferralLinkContainer>
            <ReferralContainer>
              <div>Your referral link</div>
              <Refer>{referral}</Refer>
            </ReferralContainer>
            <CopyIconContainer>
              <Tooltip title="Copy to clipboard">
                <CopyOutlined
                  onClick={handleCopy}
                  style={{ cursor: "pointer" }}
                />
              </Tooltip>
            </CopyIconContainer>
          </ReferralLinkContainer>
          {showAlert && (
            <Alert
              message="Copied to clipboard"
              type="success"
              showIcon
              style={{ marginTop: "10px" }}
            />
          )}

          <FooterIconsContainer>
            <FooterIconItem onClick={handleLeadershipBoardClick}>
              <TrophyOutlined />
              <div>Leadership Board</div>
            </FooterIconItem>

            <FooterIconItem onClick={handleSummaryClick}>
              <BankOutlined />
              <div>Withdrawal Summary</div>
            </FooterIconItem>
            <FooterIconItem onClick={handleTotalEarningsClick}>
              <DollarCircleOutlined />
              <div>Total Earning Summary</div>
            </FooterIconItem>
            <FooterIconItem as="a" href="tel:+1234567890">
              <CustomerServiceOutlined />
              <div>Customer Care</div>
            </FooterIconItem>

            <FooterIconItem
              as="a"
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppOutlined />
              <div>WhatsApp</div>
            </FooterIconItem>

            <FooterIconItem
              as="a"
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppOutlined />
              <div>Telegram</div>
            </FooterIconItem>

            {/* <FooterIconItem>
              <MailOutlined />
              <div>Email</div>
            </FooterIconItem> */}
          </FooterIconsContainer>

          <StyledModal
            title="Withdrawal Form"
            visible={isWithdrawModalVisible}
            onCancel={handleWithdrawModalCancel}
            footer={null}
          >
            <WithdrawalForm userDashboardDetails={userDashboardDetails} />
          </StyledModal>

          <StyledModal
            title="Withdrawal Summary"
            visible={isSummaryModalVisible}
            onCancel={handleSummaryModalCancel}
            footer={null}
          >
            <WithdrawalSummary userId={userId} />
          </StyledModal>
          <StyledModal
            title="Total Earnings"
            visible={isTotalEarningsModalVisible}
            onCancel={handleTotalEarningsModalCancel}
            footer={null}
          >
            <TotalEarnings userId={userId} />{" "}
          </StyledModal>
          <StyledModal
            title="Leadership Board"
            visible={isLeadershipBoardModalVisible}
            onCancel={handleLeadershipBoardModalCancel}
            footer={null}
          >
            <LeadershipBoard />
          </StyledModal>
        </DashboardContainer>
      )}

      {!userData && (
        <Alert
          message={
            <>
              Kindly <Link to="/login">login</Link> to see your dashboard
            </>
          }
          type="warning"
          showIcon
          style={{ marginTop: "16px" }}
        />
      )}
    </>
  );
};

export default UserDashboard;
