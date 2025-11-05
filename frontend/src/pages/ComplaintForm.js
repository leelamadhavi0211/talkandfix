import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ added for multilingual
import VoiceRecorder from "../components/VoiceRecorder";
import LocationFetcher from "../components/LocationFetcher";
import api from "../services/api";
import "../styles/main.css";

export default function ComplaintForm() {
  const [text, setText] = useState("");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ initialize translation hook

  const handleSubmit = async () => {
    if (!text.trim() || text.trim().length < 5) {
      alert(t("invalidComplaintAlert"));
      return;
    }
    if (!location) {
      alert(t("locationAlert"));
      return;
    }

    try {
      setLoading(true);

      const complaintData = {
        description: text.trim(),
        latitude: location.latitude,
        longitude: location.longitude,
        address: "User provided location",
      };

      const res = await api.post("/complaints", complaintData);
      console.log("Response:", res.data);

      if (res.data?.complaint?.complaintId) {
        const complaintId = res.data.complaint.complaintId;
        navigate("/success", { state: { id: complaintId } });
      } else {
        alert(t("noIdReturned"));
      }

      setText("");
      setLocation(null);
    } catch (error) {
      console.error("❌ Error submitting complaint:", error);
      alert(t("submissionError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="complaint-page">
      <div className="complaint-card">
        <h1 className="complaint-title">📝 {t("raiseComplaint")}</h1>
        <p className="complaint-subtitle">{t("speakOrType")}</p>

        {/* 🎙️ Voice Input */}
        <div className="complaint-section">
          <h3 className="section-title">🎙️ {t("voiceInput")}</h3>
          <VoiceRecorder onTextGenerated={(t) => setText(t)} />
          {text && (
            <p className="recorded-text">
              📝 {t("youSaid")}: <span>{text}</span>
            </p>
          )}
        </div>

        {/* 💬 Text Description */}
        <div className="complaint-section">
          <h3 className="section-title">💬 {t("description")}</h3>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t("descriptionPlaceholder")}
            className="complaint-textarea"
          />
        </div>

        {/* 📍 Location Section */}
        <div className="complaint-section">
          <h3 className="section-title">📍 {t("location")}</h3>
          <LocationFetcher onLocationFetched={(loc) => setLocation(loc)} />
          {location && (
            <p className="location-text">
              📌 {t("latitude")}: {location.latitude.toFixed(4)} | {t("longitude")}:{" "}
              {location.longitude.toFixed(4)}
            </p>
          )}
        </div>

        {/* 🚀 Submit Button */}
        <button
          className="btn-submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? t("submitting") : `🚀 ${t("submitComplaint")}`}
        </button>
      </div>
    </div>
  );
}
