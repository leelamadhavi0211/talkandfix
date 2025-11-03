import React, { useState } from "react";
import VoiceRecorder from "../components/VoiceRecorder";
import LocationFetcher from "../components/LocationFetcher";
import api from "../services/api";
import "../styles/main.css";

export default function ComplaintForm() {
  const [text, setText] = useState("");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text || !location) {
      alert("Please record/enter complaint and fetch location");
      return;
    }
    try {
      setLoading(true);
      const res = await api.post("/complaints", {
        userId: localStorage.getItem("userId") || "anon_" + Date.now(),
        description: text,
        latitude: location.latitude,
        longitude: location.longitude,
      });
      alert(res.data.message || "Complaint submitted successfully!");
      setText("");
    } catch (error) {
      alert("Backend not connected yet — this will work once backend is ready.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="complaint-page">
      <div className="complaint-card">
        <h1 className="complaint-title">📝 Raise a Complaint</h1>
        <p className="complaint-subtitle">
          Speak or type your issue — we’ll capture your location automatically.
        </p>

        <div className="complaint-section">
          <h3 className="section-title">🎙️ Voice Input</h3>
          <VoiceRecorder onTextGenerated={(t) => setText(t)} />
          {text && (
  <p className="recorded-text">
    📝 You said: <span>{text}</span>
  </p>
)}

        </div>

        <div className="complaint-section">
          <h3 className="section-title">💬 Description</h3>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Describe your issue clearly..."
            className="complaint-textarea"
          />
        </div>

        <div className="complaint-section">
          <h3 className="section-title">📍 Location</h3>
          <LocationFetcher onLocationFetched={(loc) => setLocation(loc)} />
          {location && (
            <p className="location-text">
              📌 Latitude: {location.latitude.toFixed(4)} | Longitude:{" "}
              {location.longitude.toFixed(4)}
            </p>
          )}
        </div>

        <button
          className="btn-submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "🚀 Submit Complaint"}
        </button>
      </div>
    </div>
  );
}
