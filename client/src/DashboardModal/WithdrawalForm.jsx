import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Alert,
  message,
  InputNumber,
  Modal,
} from "antd";
import styled from "styled-components";
import axios from "axios";
import { useUserData } from "../context/UserDataContext";
import CryptoJS from "crypto-js";

const WithdrawalFormContainer = styled.div`
  width: 400px;
  margin: auto;
  margin-top: 50px;
  background: white;
  padding: 20px;
  border-radius: 20px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const WithdrawalForm = ({ userDashboardDetails }) => {
  const { userData } = useUserData();
  const [form] = Form.useForm();
  const [amount, setAmount] = useState(null);
  const [banks, setBanks] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get("https://api.paystack.co/bank");
        setBanks(response.data.data);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        // Decrypt user data
        const bytes = CryptoJS.AES.decrypt(
          userData,
          "b2116e7e6e4646b3713b7c3f225729987baedc5c98dbefc6b2d4cfc9ee246eb5",
        );
        const decryptedUserData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(decryptedUserData);
        // Set form values from user data
        form.setFieldsValue({
          accountNumber: decryptedUserData.accountNumber,
          bank: decryptedUserData.bank,
          accountName: decryptedUserData.accountName,
        });
      } catch (error) {
        console.error("Error decrypting user data:", error);
      }
    }
  }, [userDashboardDetails, userData, form]);

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const onFinish = async (values) => {
    if (parseFloat(amount) > userDashboardDetails.balance) {
      setAlert(
        <Alert
          message="You have input more than the available balance"
          type="error"
        />,
      );
      return;
    }

    setLoading(true);

    const withdrawalData = {
      userId: userDashboardDetails.userId,
      amount,
      accountNumber: values.accountNumber,
      bank: values.bank,
      accountName: values.accountName,
      userEmail: userDashboardDetails.userEmail,
      userName: userDashboardDetails.userName,
    };

    try {
      const response = await axios.post(
        "https://cashflowcapital.onrender.com/api/withdrawals/request-withdrawal",
        withdrawalData,
      );
      setLoading(false);

      if (response.data.success) {
        setModalVisible(true);
      } else {
        message.error("Error processing withdrawal");
      }
    } catch (error) {
      setLoading(false);
      message.error("Error processing withdrawal");
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    window.location.reload(); // Reload the page
  };

  return (
    <WithdrawalFormContainer>
      <Form form={form} name="withdrawal" onFinish={onFinish} layout="vertical">
        <p>Available Balance: ${userDashboardDetails?.balance}</p>
        {alert}
        <Form.Item
          name="amount"
          label="Enter amount you want to withdraw"
          rules={[
            { required: true, message: "Please enter an amount" },
            () => ({
              validator(_, value) {
                if (
                  !value ||
                  parseFloat(value) <= userDashboardDetails.balance
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Amount exceeds available balance"),
                );
              },
            }),
          ]}
        >
          <InputNumber
            min={0}
            value={amount}
            onChange={handleAmountChange}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item style={{ background: "#f1f1f1aa", padding: "10px" }}>
          <Form.Item
            label="Account Number"
            name="accountNumber"
            rules={[
              {
                required: true,
                message: "Please enter your account number",
              },
              {
                pattern: /^[0-9]*$/,
                message: "Please enter a valid account number",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bank"
            name="bank"
            rules={[
              {
                required: true,
                message: "Please enter your bank name",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Select bank"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {banks.map((bank) => (
                <Select.Option key={bank.id} value={bank.name}>
                  {bank.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Account Name"
            name="accountName"
            rules={[
              {
                required: true,
                message: "Please enter your account name",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <StyledButton type="primary" htmlType="submit" loading={loading}>
            Withdraw ${amount}
          </StyledButton>
        </Form.Item>
      </Form>

      <Modal
        title="Withdrawal Request Sent"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="ok" type="primary" onClick={handleModalClose}>
            OK
          </Button>,
        ]}
      >
        <p>Hello, {userDashboardDetails?.userName}</p>
        <p>
          Your request to withdraw $ ${amount} has been sent. You will receive
          an alert for the amount in your account shortly. You can check your
          withdrawal summary to review the transaction. Thanks for referring,
          keep referring to earn more!
        </p>
      </Modal>
    </WithdrawalFormContainer>
  );
};

export default WithdrawalForm;
