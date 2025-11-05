import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ import translation hook
import "../styles/main.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ initialize translator

  return (
    <div className="dashboard">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-top">
          <h1 className="app-title">🗣️ {t("appTitle")}</h1>
          <button
            className="admin-login-btn"
            onClick={() => navigate("/admin-login")}
          >
            🔑 {t("adminLogin")}
          </button>
        </div>

        <p className="app-subtitle">{t("subtitle")}</p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate("/complaint")}>
            🚀 {t("getStarted")}
          </button>

          <button className="btn-secondary" onClick={() => navigate("/track")}>
            🔍 {t("trackComplaint")}
          </button>

          <button className="btn-secondary" onClick={() => navigate("/history")}>
            📜 {t("viewMyComplaints")}
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>{t("aboutTitle")}</h2>
        <p>{t("aboutText1")}</p>
        <p>{t("aboutText2")}</p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>{t("featuresTitle")}</h2>
        <div className="features-grid">
          <div className="feature">
            <span className="feature-icon">🎙️</span>
            <h3>{t("voiceComplaint")}</h3>
            <p>{t("voiceComplaintDesc")}</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📍</span>
            <h3>{t("autoLocation")}</h3>
            <p>{t("autoLocationDesc")}</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <h3>{t("trackStatus")}</h3>
            <p>{t("trackStatusDesc")}</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🤖</span>
            <h3>{t("smartFilter")}</h3>
            <p>{t("smartFilterDesc")}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Talk & Fix | {t("footerNote")}</p>
      </footer>
    </div>
  );
}
