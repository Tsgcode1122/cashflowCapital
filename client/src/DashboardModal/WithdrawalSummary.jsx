import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Tag, Spin, Alert } from "antd";
import styled from "styled-components";

const ScrollableContent = styled.div`
  max-height: 90vh;
  overflow-y: auto;
`;

const WithdrawalSummary = ({ userId }) => {
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWithdrawalSummary = async () => {
      try {
        const response = await axios.get(
          `https://cashflowcapital.onrender.com/api/withdrawals/summary`,
          {
            params: { userId },
          },
        );
        setWithdrawals(response.data.withdrawals.reverse());
      } catch (error) {
        setError(
          "You have not made any withdrawals. Refer and earn so you can withdraw from your earnings.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWithdrawalSummary();
  }, [userId]);

  const columns = [
    {
      title: "Withdrawal Requested",
      dataIndex: "requestedAt",
      key: "requestedAt",
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Requested Bank",
      dataIndex: "bank",
      key: "bank",
      render: (_, record) => (
        <>
          <p>Bank: {record.bank}</p>
          <p>Account Number: {record.accountNumber}</p>
          <p>Account Name: {record.accountName}</p>
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = status === "pending" ? "volcano" : "green";
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
  ];

  if (loading) return <Spin tip="Loading..." />;
  if (error) return <Alert message={error} type="error" />;

  return (
    <ScrollableContent>
      {withdrawals.length === 0 ? (
        <Alert
          message="You have not made any withdrawals. Refer and earn so you can withdraw from your earnings."
          type="info"
          showIcon
        />
      ) : (
        <Table
          columns={columns}
          dataSource={withdrawals}
          rowKey={(record) => record.requestedAt}
          pagination={{
            pageSize: 5,
          }}
        />
      )}
    </ScrollableContent>
  );
};

export default WithdrawalSummary;
