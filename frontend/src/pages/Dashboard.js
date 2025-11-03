import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Hero Section */}
      <header className="hero">
  <div className="hero-top">
    <h1 className="app-title">🗣️ Talk & Fix</h1>
    <button className="admin-login-btn" onClick={() => navigate("/admin-login")}>
      🔑 Admin Login
    </button>
  </div>

  <p className="app-subtitle">
    A simple and smart way to report local issues using your voice, text, and location.
  </p>

  <div className="hero-buttons">
    <button className="btn-primary" onClick={() => navigate("/complaint")}>
      🚀 Get Started
    </button>
    <button className="btn-secondary" onClick={() => navigate("/history")}>
      📜 View My Complaints
    </button>
  </div>
</header>

      

      {/* About Section */}
      <section className="about">
        <h2>About Talk & Fix</h2>
        <p>
          Talk & Fix is a citizen-friendly web platform that bridges the gap between people and local authorities.
          Users can raise complaints through voice or text — the system automatically captures their GPS location and forwards it to concerned departments.
        </p>
        <p>
          Our goal is to make civic communication effortless — especially for rural users who might not have access to complex systems. 
          Just speak, send, and track your issue. 💬
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature">
            <span className="feature-icon">🎙️</span>
            <h3>Voice Complaint</h3>
            <p>Just speak your problem — our system converts it into text automatically.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📍</span>
            <h3>Auto Location</h3>
            <p>Your GPS coordinates are automatically captured to help identify your area.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <h3>Track Status</h3>
            <p>Know if your complaint is pending, received, or solved anytime.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🤖</span>
            <h3>Smart Filter</h3>
            <p>AI detects inappropriate or fake text before complaints are submitted.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Talk & Fix | Built for Smarter Communities ❤️</p>
      </footer>
    </div>
  );
}
