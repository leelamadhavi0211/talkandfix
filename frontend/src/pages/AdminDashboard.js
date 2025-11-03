import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const res = await api.get("/admin/all");
      setComplaints(res.data);
    };
    fetchComplaints();
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/admin/update-status/${id}`, { status });
    alert("Status updated");
    setComplaints(complaints.map(c => c._id === id ? { ...c, status } : c));
  };
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(c => (
            <tr key={c._id}>
              <td>{c.complaintId}</td>
              <td>{c.description}</td>
              <td>{c.location.address}</td>
              <td>{c.status}</td>
              <td>
                <button onClick={() => updateStatus(c._id, "Received")}>Received</button>
                <button onClick={() => updateStatus(c._id, "Solved")}>Solved</button>
                <button onClick={() => updateStatus(c._id, "Rejected")}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
