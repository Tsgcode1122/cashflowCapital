// src/pages/UserWithdrawals.js

import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Radio, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const UserWithdrawals = () => {
  const [users, setUsers] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://cashflowcapital.onrender.com/api/withdrawals/userwithdrawals",
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button onClick={() => handleViewWithdrawals(record)}>
          View Withdrawals
        </Button>
      ),
    },
  ];

  const withdrawalColumns = [
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Account Number",
      dataIndex: "accountNumber",
      key: "accountNumber",
    },
    {
      title: "Bank",
      dataIndex: "bank",
      key: "bank",
    },
    {
      title: "Account Name",
      dataIndex: "accountName",
      key: "accountName",
    },
    {
      title: "Requested At",
      dataIndex: "requestedAt",
      key: "requestedAt",
      render: (requestedAt) => new Date(requestedAt).toLocaleString(),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => (
        <span style={{ color: status === "paid" ? "green" : "orange" }}>
          {status}{" "}
          {status === "pending" && (
            <EditOutlined onClick={() => handleEditStatus(record)} />
          )}
        </span>
      ),
    },
  ];

  const handleViewWithdrawals = (user) => {
    setSelectedUser(user);
    setWithdrawals(user.withdrawals.reverse());
  };

  const handleEditStatus = (withdrawal) => {
    setSelectedWithdrawal(withdrawal);
    setNewStatus(withdrawal.status);
    setStatusModalVisible(true);
  };

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleUpdateStatus = async () => {
    try {
      await axios.post(
        `https://cashflowcapital.onrender.com/api/withdrawals/userwithdrawals/${selectedWithdrawal._id}/update`,
        {
          status: newStatus,
        },
      );
      message.success("Withdrawal status updated successfully");
      setStatusModalVisible(false);
      setSelectedWithdrawal(null);

      const response = await axios.get(
        "https://cashflowcapital.onrender.com/api/withdrawals/userwithdrawals",
      );
      setUsers(response.data);
      setSelectedUser(null);
    } catch (error) {
      console.error("Error updating withdrawal status:", error);
      message.error("Failed to update withdrawal status");
    }
  };

  const closeStatusModal = () => {
    setStatusModalVisible(false);
    setSelectedWithdrawal(null);
  };

  return (
    <>
      <Container>
        <h1>User Withdrawals</h1>
        <StyledTableContainer>
          <StyledTable
            dataSource={users}
            columns={columns}
            rowKey="_id"
            pagination={{ pageSize: 10 }}
            scroll={{ x: true }}
          />
        </StyledTableContainer>
        <Modal
          title="User Withdrawals"
          visible={!!selectedUser}
          onCancel={() => setSelectedUser(null)}
          footer={null}
          width={800}
        >
          <Table
            dataSource={withdrawals}
            columns={withdrawalColumns}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            scroll={{ x: true }}
          />
        </Modal>
        <Modal
          title="Update Withdrawal Status"
          visible={statusModalVisible}
          onCancel={closeStatusModal}
          onOk={handleUpdateStatus}
        >
          <Radio.Group onChange={handleStatusChange} value={newStatus}>
            <Radio value="pending">Pending</Radio>
            <Radio value="paid">Paid</Radio>
          </Radio.Group>
        </Modal>
      </Container>
    </>
  );
};

const StyledTableContainer = styled.div`
  padding: 1rem;
  width: 100%;
`;

const Container = styled.div`
  padding: 20px;
  background-color: white !important;
`;

const StyledTable = styled(Table)`
  overflow-x: auto !important;
`;

export default UserWithdrawals;
