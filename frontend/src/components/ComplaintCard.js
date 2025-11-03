import React from "react";

export default function ComplaintCard({ complaint }) {
  return (
    <div className="card">
      <h3>{complaint.description}</h3>
      <p><strong>Location:</strong> {complaint.location.address}</p>
      <p><strong>Status:</strong> {complaint.status}</p>
      <p><small>{new Date(complaint.timestamp).toLocaleString()}</small></p>
    </div>
  );
}
