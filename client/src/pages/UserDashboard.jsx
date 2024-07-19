import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar, Tooltip, Alert, Modal } from "antd";
import {
  StockOutlined,
  BankOutlined,
  DollarCircleOutlined,
  TrophyOutlined,
  WhatsAppOutlined,
  CustomerServiceOutlined,
  MailOutlined,
  TeamOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUserData } from "../context/UserDataContext";
import WithdrawalForm from "../DashboardModal/WithdrawalForm";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #0f1a36, #020b19);
  color: white;
`;

const ProfileLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const WelcomeText = styled.div`
  margin-left: 10px;
`;

const Card = styled.div`
  border-radius: 10px;
  align-items: center;
  position: relative;
  margin: 20px 0;
  text-align: center;
  width: 80%;
  z-index: 2;

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
`;

const ReferralContainer = styled.div`
  word-break: break-all;
  max-width: 80%;
`;

const Refer = styled.div`
  font-size: 12px;
`;

const CopyIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const FooterIconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  max-width: 120px;
  margin-bottom: 20px;
  text-align: center;
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

const UserDashboard = () => {
  const { userData } = useUserData();
  const [userDashboardDetails, setUserDashboardDetails] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userId = userData ? userData._id : null;

  const referral = userDashboardDetails?.referralLink
    ? userDashboardDetails.referralLink
    : "";
  const firstName = userDashboardDetails?.userName
    ? userDashboardDetails.userName.split(" ")[0]
    : "";

  useEffect(() => {
    const fetchUserDashboardDetails = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:5006/api/userDashboard/dashboard/${userId}`,
          );
          setUserDashboardDetails(response.data);
          console.log(response.data);
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
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {userData && (
        <DashboardContainer>
          <Header>
            <UserInfo>
              <Avatar src="https://via.placeholder.com/150" size="large" />
              <WelcomeText>
                <div>Hello {firstName}</div>
                <div>Welcome, let's earn today!</div>
              </WelcomeText>
            </UserInfo>
            <ProfileLink to="/customer-profile">Profile</ProfileLink>
          </Header>

          <Card>
            <Before>
              <Amount>
                <Price>${userDashboardDetails?.balance}</Price>
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
            <FooterIconItem>
              <TrophyOutlined />
              <div>Leadership Board</div>
            </FooterIconItem>

            <FooterIconItem>
              <BankOutlined />
              <div>Withdrawal Summary</div>
            </FooterIconItem>
            <FooterIconItem>
              <DollarCircleOutlined />
              <div>Total Earning Summary</div>
            </FooterIconItem>
            <FooterIconItem>
              <CustomerServiceOutlined />
              <div>Customer Care</div>
            </FooterIconItem>
            <FooterIconItem>
              <TeamOutlined />
              <div>Referrals</div>
            </FooterIconItem>
            <FooterIconItem>
              <WhatsAppOutlined />
              <div>WhatsApp</div>
            </FooterIconItem>
            <FooterIconItem>
              <WhatsAppOutlined />
              <div>Telegram</div>
            </FooterIconItem>
            <FooterIconItem>
              <MailOutlined />
              <div>Email</div>
            </FooterIconItem>
          </FooterIconsContainer>

          <Modal
            title="Withdrawal "
            visible={isModalVisible}
            onCancel={handleModalCancel}
            footer={null}
          >
            <WithdrawalForm userDashboardDetails={userDashboardDetails} />
          </Modal>
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
