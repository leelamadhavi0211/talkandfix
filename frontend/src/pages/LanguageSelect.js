import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/main.css";

export default function LanguageSelect() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    navigate("/dashboard");
  };

  return (
    <div className="lang-select-page">
      <h1 className="lang-select-title">🌍 Select Language / భాషను ఎంచుకోండి</h1>
      <div className="lang-buttons">
        <button className="btn-lang" onClick={() => handleLanguageSelect("en")}>
          🇬🇧 English
        </button>
        <button className="btn-lang" onClick={() => handleLanguageSelect("te")}>
          🇮🇳 తెలుగు
        </button>
      </div>
    </div>
  );
}
