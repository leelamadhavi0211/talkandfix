import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ for language support
import "../styles/main.css";

export default function ComplaintSuccess() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { t } = useTranslation(); // ✅ translation hook

  const complaintId = state?.id || t("notAvailable");

  return (
    <div className="success-page">
      <div className="success-card">
        <h1 className="success-title">✅ {t("thankYou")}</h1>
        <p className="success-text">{t("complaintReceived")}</p>

        <div className="success-id-box">
          <p className="success-id-label">{t("yourComplaintId")}</p>
          <p className="success-id-value">{complaintId}</p>
          <p className="success-status">
            {t("currentStatus")}: <b>{t("pending")}</b>
          </p>
        </div>

        <p className="success-note">🔹 {t("noteId")}</p>

        <div className="success-buttons">
          <button className="btn-new" onClick={() => navigate("/complaint")}>
            {t("submitAnother")}
          </button>

          <button className="btn-home" onClick={() => navigate("/track")}>
            {t("trackStatus")}
          </button>

          <button className="btn-home" onClick={() => navigate("/")}>
            {t("goToDashboard")}
          </button>
        </div>
      </div>
    </div>
  );
}
