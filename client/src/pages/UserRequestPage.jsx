// src/pages/UserRequestPage.js

import React, { useState, useEffect } from "react";
import { List, Button, Modal, message, Pagination } from "antd";
import axios from "axios";
import styled from "styled-components";

const UserRequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "https://cashflowcapital.onrender.com/api/withdrawals/userwithdrawals",
        );
        // Flatten and sort the requests array
        const flattenedRequests = response.data
          .flatMap((user) =>
            user.withdrawals.map((withdrawal) => ({
              ...withdrawal,
              userName: user.userName,
              userEmail: user.userEmail,
              userId: user.userId,
            })),
          )
          .sort((a, b) => new Date(b.requestedAt) - new Date(a.requestedAt));

        setRequests(flattenedRequests);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);

  const handleViewMore = (request) => {
    setSelectedRequest(request);
    setModalVisible(true);
  };

  const handleMarkAsPaid = async () => {
    try {
      await axios.post(
        `https://cashflowcapital.onrender.com/api/withdrawals/userwithdrawals/${selectedRequest._id}/update`,
        { status: "paid" },
      );
      message.success("Request marked as paid successfully");
      setModalVisible(false);
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req._id.$oid === selectedRequest._id.$oid
            ? { ...req, status: "paid" }
            : req,
        ),
      );
    } catch (error) {
      console.error("Error marking request as paid:", error);
      message.error("Failed to mark request as paid");
    }
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const paginatedRequests = requests.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <Container>
      <h1>User Requests</h1>
      <List
        itemLayout="horizontal"
        dataSource={paginatedRequests}
        renderItem={(request) => (
          <List.Item>
            <Notification>
              <NotificationText>
                Hello, {request.userName} requested to withdraw {request.amount}{" "}
                at {new Date(request.requestedAt).toLocaleString()}.
              </NotificationText>
              <Button type="primary" onClick={() => handleViewMore(request)}>
                View More
              </Button>
            </Notification>
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={requests.length}
        onChange={handlePageChange}
        style={{ textAlign: "center", marginTop: "20px" }}
      />
      <Modal
        title="Request Details"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setModalVisible(false)}>
            Close
          </Button>,
          selectedRequest && selectedRequest.status === "pending" ? (
            <Button key="markAsPaid" type="primary" onClick={handleMarkAsPaid}>
              Mark as Paid
            </Button>
          ) : (
            <Button key="paid" type="primary" disabled>
              Paid
            </Button>
          ),
        ]}
      >
        {selectedRequest && (
          <ModalContent>
            <p>
              <strong>Amount:</strong> {selectedRequest.amount}
            </p>
            <p>
              <strong>Account Number:</strong> {selectedRequest.accountNumber}
            </p>
            <p>
              <strong>Bank:</strong> {selectedRequest.bank}
            </p>
            <p>
              <strong>Account Name:</strong> {selectedRequest.accountName}
            </p>
            <p>
              <strong>Status:</strong> {selectedRequest.status}
            </p>
          </ModalContent>
        )}
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: white;
`;

const Notification = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  background-color: #fafafa;
  margin-bottom: 10px;
`;

const NotificationText = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const ModalContent = styled.div`
  padding: 20px;

  p {
    margin: 10px 0;
  }

  p strong {
    color: ${({ status }) =>
      status === "paid"
        ? "#52c41a"
        : "#faad14"}; // Ant Design success and warning colors
  }
`;

export default UserRequestPage;
