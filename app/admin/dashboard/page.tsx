'use client';

import { useState } from "react";

export default function AdminDashboard() {
  const [showBloodRequests, setShowBloodRequests] = useState(false);
  const [showBloodGroups, setShowBloodGroups] = useState(false);

  // Sample data (this can be fetched from your database)
  const bloodRequests = [
    { id: 1, name: "Murali", bloodGroup: "O+", status: "Pending" },
    { id: 2, name: "Jane Smith", bloodGroup: "B-", status: "Pending" },
  ];

  const bloodGroupAvailability = [
    { group: "A+", amount: 10 },
    { group: "B+", amount: 8 },
    { group: "O-", amount: 15 },
    { group: "AB-", amount: 5 },
  ];

  const handleAcceptRequest = (id: number) => {
    alert(`Accepted request for ID: ${id}`);
  };

  const handleRejectRequest = (id: number) => {
    alert(`Rejected request for ID: ${id}`);
  };

  return (
    <div className="container">
      <h1 className="header">Admin Dashboard</h1>
      <div className="button-container">
        <button className="toggle-button" onClick={() => setShowBloodRequests(!showBloodRequests)}>
          Toggle Blood Request Management
        </button>
        <button className="toggle-button" onClick={() => setShowBloodGroups(!showBloodGroups)}>
          Toggle Blood Group Availability
        </button>
      </div>

      {showBloodRequests && (
        <div className="section">
          <h2 className="section-header">Blood Requests</h2>
          <table className="table">
            <thead>
              <tr>
                <th className="table-header">Name</th>
                <th className="table-header">Blood Group</th>
                <th className="table-header">Status</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bloodRequests.map((request) => (
                <tr key={request.id}>
                  <td className="table-cell">{request.name}</td>
                  <td className="table-cell">{request.bloodGroup}</td>
                  <td className="table-cell">{request.status}</td>
                  <td className="table-cell">
                    <button className="action-button" onClick={() => handleAcceptRequest(request.id)}>
                      Accept
                    </button>
                    <button className="action-button" onClick={() => handleRejectRequest(request.id)}>
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showBloodGroups && (
        <div className="section">
          <h2 className="section-header">Blood Group Availability</h2>
          <table className="table">
            <thead>
              <tr>
                <th className="table-header">Blood Group</th>
                <th className="table-header">Amount Available</th>
              </tr>
            </thead>
            <tbody>
              {bloodGroupAvailability.map((group) => (
                <tr key={group.group}>
                  <td className="table-cell">{group.group}</td>
                  <td className="table-cell">{group.amount} liters</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style jsx>{`
        .container {
          padding: 2rem;
          font-family: Arial, sans-serif;
          background-color: #f8f8f8;
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          color: #333;
          margin-bottom: 2rem;
        }

        .button-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .toggle-button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          font-size: 16px;
        }

        .toggle-button:hover {
          background-color: #005bb5;
        }

        .section {
          margin-bottom: 3rem;
        }

        .section-header {
          color: #333;
          margin-bottom: 1rem;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .table-header {
          background-color: #f4f4f9;
          padding: 12px;
          text-align: left;
        }

        .table-cell {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
        }

        .action-button {
          padding: 8px 15px;
          background-color: #28a745;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          font-size: 14px;
        }

        .action-button:hover {
          background-color: #218838;
        }

        .action-button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}
