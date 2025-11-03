import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "../styles/main.css";

export default function VoiceRecorder({ onTextGenerated }) {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleStart = () =>
    SpeechRecognition.startListening({ continuous: true, language: "te-IN" }); // Telugu only

  const handleStop = () => {
    SpeechRecognition.stopListening();
    onTextGenerated(transcript);
  };

  return (
    <div className="voice-section">
      <p className="voice-status">
        <strong>Status:</strong> {listening ? "🎤 Listening..." : "Click start to speak in Telugu"}
      </p>

      <div className="voice-buttons">
        <button className="btn-voice start" onClick={handleStart}>
          ▶️ Start Recording
        </button>
        <button className="btn-voice stop" onClick={handleStop}>
          ⏹ Stop
        </button>
        <button className="btn-voice reset" onClick={resetTranscript}>
          🔄 Reset
        </button>
      </div>

      <p className="voice-hint">
        💬 Speak naturally in Telugu. Your complaint will be automatically translated to English before submission.
      </p>
    </div>
  );
}
