import React, { useState, useEffect } from "react";
import { Table, Button, Modal, message } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const RegisterUsers = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          "https://cashflowcapital.onrender.com/api/auth/",
        );
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => <a href={`mailto:${email}`}>{email}</a>,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (phoneNumber) => (
        <StyledPhoneButton
          type="link"
          icon={<PhoneOutlined />}
          onClick={() => handleCall(phoneNumber)}
        >
          {phoneNumber}
        </StyledPhoneButton>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button onClick={() => handleViewDetails(record)}>View More</Button>
      ),
    },
  ];

  const handleViewDetails = (customer) => {
    setSelectedCustomer(customer);
    setModalVisible(true);
  };

  const handleCall = (phoneNumber) => {
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink);
  };

  const handleDelete = async () => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      onOk: async () => {
        try {
          await axios.delete(
            `https://cashflowcapital.onrender.com/api/auth/${selectedCustomer._id}`,
          );
          message.success("User deleted successfully");
          setModalVisible(false);
          setSelectedCustomer(null);
          const response = await axios.get(
            "https://cashflowcapital.onrender.com/api/auth/",
          );
          setCustomers(response.data);
        } catch (error) {
          console.error("Error deleting user:", error);
          message.error("Failed to delete user");
        }
      },
    });
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCustomer(null);
  };

  return (
    <>
      <Container>
        <h1>Registered Users</h1>
        <StyledTableContainer>
          <StyledTable
            dataSource={customers}
            columns={columns}
            pagination={{ pageSize: 10 }}
            scroll={{ x: true }}
          />
        </StyledTableContainer>
        <StyledModal
          title="Customer Details"
          visible={modalVisible}
          onCancel={closeModal}
          footer={null}
        >
          {selectedCustomer && (
            <StyledModalContent>
              {Object.entries(selectedCustomer).map(([key, value]) => {
                if (
                  key !== "password" &&
                  key !== "itemsInCart" &&
                  key !== "numberOfOrders"
                ) {
                  return (
                    <p key={key}>
                      <strong>{key}: </strong>
                      {value}
                    </p>
                  );
                }
                return null;
              })}
              <StyledDeleteButton onClick={handleDelete} danger>
                Delete User
              </StyledDeleteButton>
            </StyledModalContent>
          )}
        </StyledModal>
      </Container>
    </>
  );
};

const StyledTableContainer = styled.div`
  /* padding: 1rem;
  width: 100%; */
`;
const Container = styled.div`
  padding: 20px;
  background-color: white !important;
`;
const StyledModalContent = styled.div`
  padding: 20px;
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    backdrop-filter: blur(5px);
  }
`;

const StyledDeleteButton = styled(Button)`
  margin-top: 16px;
`;
const StyledTable = styled(Table)`
  overflow-x: auto !important;
`;
const StyledPhoneButton = styled(Button)`
  margin-right: 8px;
`;

export default RegisterUsers;
