import React, { useEffect, useState } from "react";
import api from "../services/api";
import ComplaintCard from "../components/ComplaintCard";

export default function ComplaintHistory() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem("userId");
      const res = await api.get(`/complaints/${id}`);
      setComplaints(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>My Complaints</h2>
      {complaints.map((c) => (
        <ComplaintCard key={c._id} complaint={c} />
      ))}
    </div>
  );
}
