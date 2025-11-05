/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import LanguageSelect from "./pages/LanguageSelect";
import Dashboard from "./pages/Dashboard";
import ComplaintForm from "./pages/ComplaintForm";
import ComplaintHistory from "./pages/ComplaintHistory";
import AdminDashboard from "./pages/AdminDashboard";
import ComplaintSuccess from "./pages/complaintSuccess";
import TrackComplaint from "./pages/TrackComplaint";


import "./styles/main.css";

function App() {
  const langChosen = localStorage.getItem("lang");
  //const Navigate
  return (
    <Router>
      <Routes>
        <Route path="/" element={langChosen ? <Navigate to="/dashboard" /> : <LanguageSelect />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complaint" element={<ComplaintForm />} />
        <Route path="/history" element={<ComplaintHistory />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/success" element={<ComplaintSuccess />} />
        <Route path="/track" element={<TrackComplaint />} />
        
      </Routes>
    </Router>
  );
}

export default App;

