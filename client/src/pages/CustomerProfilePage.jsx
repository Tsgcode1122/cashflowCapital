import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Select, Button, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useUserData } from "../context/UserDataContext";
import { LockOutlined } from "@ant-design/icons";
const CustomerProfilePage = () => {
  const { userData } = useUserData();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [form] = Form.useForm();
  const userId = userData ? userData._id : null;

  useEffect(() => {
    fetchCountries();
    fetchBanks();
  }, []);

  useEffect(() => {
    // Check if user data exists in local storage
    const userData = localStorage.getItem("user");
    if (userData) {
      // Decrypt user data
      const bytes = CryptoJS.AES.decrypt(
        userData,
        "b2116e7e6e4646b3713b7c3f225729987baedc5c98dbefc6b2d4cfc9ee246eb5",
      );
      const decryptedUserData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      console.log(decryptedUserData);
      // Set form values from user data
      form.setFieldsValue({
        fullName: decryptedUserData.fullName,
        country: decryptedUserData.country,
        state: decryptedUserData.state,
        phone: decryptedUserData.phoneNumber,
        streetAddress: decryptedUserData.streetAddress,
        townCity: decryptedUserData.city,
        accountNumber: decryptedUserData.accountNumber,
        bank: decryptedUserData.bank,
        accountName: decryptedUserData.accountName,
      });
    }
  }, [userData, form]);

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countryNames = response.data.map((country) => country.name.common);
      setCountries(countryNames);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStates = async (country) => {
    try {
      const response = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        { country: country },
      );
      const { states } = response.data.data || [];
      const stateNames = states.map((state) => state.name);
      setStates(stateNames || []);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchBanks = async () => {
    try {
      const response = await axios.get("https://api.paystack.co/bank");
      setBanks(response.data.data);
    } catch (error) {
      console.error("Error fetching banks:", error);
    }
  };

  const handleCountryChange = (value) => {
    // Fetch states for the selected country
    fetchStates(value);
  };

  const handleBankChange = (value) => {
    setSelectedBank(value);
    form.setFieldsValue({ bank: value });
  };

  const updateProfile = async (values) => {
    try {
      const {
        fullName,
        country,
        state,
        streetAddress,
        townCity,
        phone,
        accountNumber,
        bank,
        accountName,
      } = values;

      // Make API call to update user profile
      const response = await axios.put(
        `https://cashflowcapital.onrender.com/api/auth/update-user/${userId}`,
        {
          fullName,
          country,
          state,
          streetAddress,
          city: townCity,
          phoneNumber: phone,
          accountNumber,
          bank,
          accountName,
        },
      );

      // Update user data in local storage
      const storedEncryptedUserData = localStorage.getItem("user");
      if (storedEncryptedUserData) {
        const bytes = CryptoJS.AES.decrypt(
          storedEncryptedUserData,
          "b2116e7e6e4646b3713b7c3f225729987baedc5c98dbefc6b2d4cfc9ee246eb5",
        );
        const decryptedUserData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        // Update only the changed fields
        const updatedUserData = {
          ...decryptedUserData,
          fullName,
          country,
          state,
          streetAddress,
          city: townCity,
          phoneNumber: phone,
          accountNumber,
          bank,
          accountName,
        };

        const encryptedUserData = CryptoJS.AES.encrypt(
          JSON.stringify(updatedUserData),
          "b2116e7e6e4646b3713b7c3f225729987baedc5c98dbefc6b2d4cfc9ee246eb5",
        ).toString();

        localStorage.setItem("user", encryptedUserData);
      }

      message.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      message.error("Failed to update profile");
    }
  };

  return (
    <Container>
      <Form form={form} onFinish={updateProfile}>
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Country"
          name="country"
          rules={[{ message: "Please select your country" }]}
        >
          <Select
            showSearch
            onChange={handleCountryChange}
            placeholder="Select country"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {countries.map((country) => (
              <Select.Option key={country} value={country}>
                {country}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="State"
          name="state"
          rules={[{ message: "Please select your state" }]}
        >
          <Select
            showSearch
            placeholder="Select state"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {states.map((state) => (
              <Select.Option key={state} value={state}>
                {state}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Street Address"
          name="streetAddress"
          rules={[
            {
              message: "Please enter your street address",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Town/City"
          name="townCity"
          rules={[{ message: "Please enter your town/city" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              message: "Please enter your phone number",
            },
            {
              pattern: /^[0-9]*$/,
              message: "Please enter a valid phone number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item style={{ background: "#f1f1f1aa", padding: "10px" }}>
          <Form.Item
            label="Account Number"
            name="accountNumber"
            rules={[
              {
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
                message: "Please enter your bank name",
              },
            ]}
          >
            <Select
              showSearch
              onChange={handleBankChange}
              placeholder="Select bank"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {banks.map((bank) => (
                <Select.Option key={bank.name} value={bank.name}>
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
                message: "Please enter your account name",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form.Item>
        <Split>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: "#0F1A36" }}
            >
              Update Profile
            </Button>
          </Form.Item>
          <Form.Item>
            <StyledLink to="/reset-password">
              <Button type="primary" style={{ background: "#0F1A36" }}>
                <LockOutlined />
                Change Password
              </Button>
            </StyledLink>
          </Form.Item>
        </Split>
      </Form>
    </Container>
  );
};
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;
const Split = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-decoration: none;
  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;

const Container = styled.div`
  padding: 20px;
  background-color: white;
`;

export default CustomerProfilePage;
