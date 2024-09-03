import React, { useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useResetSendEmail } from "../context/ResetPasswordContext";
import { useForgetPassword } from "../context/forgetPasswordContext";
import styled, { keyframes } from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  padding: 20px;
  /* background-color: #f0f2f5; */
`;

const StyledForm = styled(Form)`
  padding: 20px;
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ResetPasswordPage = () => {
  const { sendEmail } = useResetSendEmail();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { forgotPassword } = useUserContext();
  const { newPasswords } = useForgetPassword();
  const [loading, setLoading] = useState(false);
  const [noFound, setNoFound] = useState(false);
  const [verifySuccess, setVerifySuccess] = useState(false);
  const [codeModalVisible, setCodeModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [newPasswordModalVisible, setNewPasswordModalVisible] = useState(false);

  const validatePassword = (_, value) => {
    if (!value || !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)) {
      return Promise.reject(
        "Password must contain at least one special character",
      );
    }
    return Promise.resolve();
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { email } = values;
      await forgotPassword(email);
      await sendVerificationCode(email);
      localStorage.setItem("resetEmail", JSON.stringify(email));
      setCodeModalVisible(true);
    } catch (error) {
      console.error(error);
      setNoFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    try {
      if (!verificationCode) {
        message.error("Please enter the verification code");
        return;
      }

      const response = await verifyCode(verificationCode);
      if (response && response.success) {
        setVerifySuccess(true);
        setCodeModalVisible(false);
        setNewPasswordModalVisible(true);
      } else {
        message.error("Invalid verification code");
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      message.error("Failed to verify code");
    }
  };

  const sendVerificationCode = async (email) => {
    try {
      await sendEmail({ email });
      message.info("Verification code sent to your email");
    } catch (error) {
      throw error;
    }
  };

  const verifyCode = async (verificationCode) => {
    try {
      const response = await axios.post(
        "https://cashflowcapital.onrender.com/api/reset/verify-code",
        {
          verificationCode,
          token: JSON.parse(localStorage.getItem("verificationToken")),
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleNewCode = async () => {
    try {
      const email = JSON.parse(localStorage.getItem("resetEmail"));
      if (!email) {
        throw new Error("Email not found in localStorage");
      }
      const { newPassword, confirmPassword } = form.getFieldsValue();
      if (newPassword !== confirmPassword) {
        throw new Error("The two passwords do not match");
      }
      await newPasswords(email, newPassword);
      message.success("Password changed successfully");
      setNewPasswordModalVisible(false);
      navigate("/");
    } catch (error) {
      console.error("Error updating password:", error);
      message.error(error.message || "Failed to update password");
    }
  };

  return (
    <FormContainer>
      <StyledForm form={form} onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item>
          <ButtonContainer>
            <Button type="primary" htmlType="submit" loading={loading}>
              Reset Password
            </Button>
            <Button type="default" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </ButtonContainer>
        </Form.Item>
      </StyledForm>
      <Modal
        title="Enter Verification Code"
        visible={codeModalVisible}
        onCancel={() => setCodeModalVisible(false)}
        centered
        footer={[
          <Button key="submit" type="primary" onClick={handleVerifyCode}>
            Submit
          </Button>,
        ]}
      >
        <Form>
          <Form.Item
            name="verificationCode"
            rules={[{ required: true, message: "Please enter the code" }]}
          >
            <Input
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Enter New Password"
        visible={newPasswordModalVisible}
        onOk={handleNewCode}
        onCancel={() => setNewPasswordModalVisible(false)}
        centered
      >
        <Form form={form}>
          <Form.Item
            name="newPassword"
            rules={[
              { required: true, message: "Please enter your password" },
              {
                min: 7,
                message: "Password must be at least 7 characters long",
              },
              { validator: validatePassword },
            ]}
          >
            <Input.Password placeholder="New Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Please confirm your new password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match"),
                  );
                },
              }),
              { validator: validatePassword },
            ]}
          >
            <Input.Password placeholder="Confirm New Password" />
          </Form.Item>
        </Form>
      </Modal>

      {verifySuccess && (
        <p style={{ color: "green" }}>Verification code verified</p>
      )}
      {noFound && <p style={{ color: "red" }}>No user found</p>}
    </FormContainer>
  );
};

export default ResetPasswordPage;
