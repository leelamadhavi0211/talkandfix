import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ added for translations
import api from "../services/api";
import "../styles/main.css";

export default function TrackComplaint() {
  const [complaintId, setComplaintId] = useState("");
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ translation hook

  const handleTrack = async () => {
    if (!complaintId.trim()) {
      alert(t("enterComplaintIdAlert"));
      return;
    }

    try {
      setLoading(true);
      const res = await api.get(`/complaints/${complaintId}`);
      setComplaint(res.data);
    } catch (error) {
      alert(t("complaintNotFound"));
      setComplaint(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="track-page">
      <div className="track-card">
        <h1 className="track-title">🔍 {t("trackComplaintTitle")}</h1>
        <p className="track-subtitle">{t("trackComplaintSubtitle")}</p>

        <input
          type="text"
          placeholder={t("complaintIdPlaceholder")}
          value={complaintId}
          onChange={(e) => setComplaintId(e.target.value)}
          className="track-input"
        />

        <div className="track-buttons">
          <button className="btn-home" onClick={() => navigate("/")}>
            🏠 {t("goToDashboard")}
          </button>

          <button className="btn-submit" onClick={handleTrack} disabled={loading}>
            {loading ? t("checking") : t("checkStatus")}
          </button>
        </div>

        {complaint && (
          <div className="track-result">
            <h3>{t("complaintDetails")}</h3>
            <p><b>{t("id")}:</b> {complaint.complaintId}</p>
            <p><b>{t("description")}:</b> {complaint.description}</p>
            <p><b>{t("status")}:</b> {complaint.status}</p>
            <p><b>{t("location")}:</b> {complaint.location?.lat}, {complaint.location?.lng}</p>
          </div>
        )}
      </div>
    </div>
  );
}
