import React, { useState } from "react";
import "../styles/main.css";

export default function LocationFetcher({ onLocationFetched }) {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getLocation = () => {
    setLoading(true);
    setError("");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(coords);
          onLocationFetched(coords);
          setLoading(false);
        },
        () => {
          setError("⚠️ Unable to fetch location. Please enable GPS or location access.");
          setLoading(false);
        }
      );
    } else {
      setError("❌ Geolocation not supported in this browser.");
      setLoading(false);
    }
  };

  return (
    <div className="location-section">
      <button className="btn-location" onClick={getLocation} disabled={loading}>
        {loading ? "📡 Fetching..." : "📍 Get My Location"}
      </button>

      {location && (
        <div className="location-box">
          <p>✅ Location Captured Successfully</p>
          <p className="coords">
            <strong>Latitude:</strong> {location.latitude.toFixed(4)} <br />
            <strong>Longitude:</strong> {location.longitude.toFixed(4)}
          </p>
        </div>
      )}

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
