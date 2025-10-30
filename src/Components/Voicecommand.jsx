import React, { useState, useEffect, useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import DisplayUi from "./Displayui";
import './voicecommand.css';
let wakeWord = "hello";

 export default function Voicecommand() {
    let [mode, setMode] = useState('Idle');// idle | MicActive | Awake | Processing | Result | Error
    let [prompt, setPrompt] = useState('');
    let [command, setCommand] = useState("");
    let timeoutRef = useRef(null);
    let lastTranscriptRef = useRef("");
    let {transcript,listening,resetTranscript,browserSupportsSpeechRecognition,} = useSpeechRecognition();
    useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      setMode("Error");
      return;
    }
    const delay = setTimeout(() => startWakeListening(), 500);
    return () => clearTimeout(delay);
  }, []);

    useEffect(() => {
    if (mode == "MicActive") {
      const lower = transcript.toLowerCase();
      if (lower.includes(wakeWord)) {
        setMode("Awake");
        setPrompt("Heyy I'm Awake...say somthing");
        SpeechRecognition.stopListening();
        resetTranscript();
        setTimeout(() => startCommandMode(), 500);
      }
    }
  }, [transcript]);

  function startWakeListening() {
    setMode("MicActive");
    setPrompt("plzz Say 'hello' to wake me up");
    setCommand("you are not specking  yet.");
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  }

  function startCommandMode() {
    setMode("Processing");
    setPrompt("Just Wait I'm Listening for your command...")
    resetTranscript();
    SpeechRecognition.startListening({ continuous: false, language: "en-US" });
     if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!transcript || transcript.trim() === "") {
  SpeechRecognition.stopListening();
  setCommand("Please say something...");
  setMode("Idle");
  startWakeListening();
}
    }, 5000);
  }

   useEffect(() => {
    if (mode == "Processing" && !listening) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      if (transcript && transcript.trim() !== "") {
        setCommand(transcript);
        setMode("Result");
        setPrompt("your command is diplayed...")
        resetTranscript();
        setTimeout(() => startWakeListening(), 3000);
      } else {
        setCommand("Did not catch that please try again.");
        setMode("Idle");
        startWakeListening();
      }
    }
  }, [listening]);

  const ModeColor = () => {
  if (mode == "Idle") {
    return "gray";
  } else if (mode == 'MicActive') {
    return "orange";
  } else if (mode == 'Awake') {
    return "blue";
  } else if (mode == 'Processing') {
    return "yellow";
  } else if (mode == 'Result') {
    return "green";
  } else if (mode == 'Result') {
    return "red";
  } else {
    return "gray";
  }
};

  return (
    <>
     <div
      className="ui-box"style={{border: `3px solid ${ModeColor()}`}}>
      <h3>
        Mode: <span style={{ color: ModeColor() }}>{mode}</span>
      </h3>
      <p>{listening ? "🎤 Listening..." : "🔇 Not Listening"}</p>
      <p>{prompt}</p>
      <DisplayUi command={command}/>
    </div>
    </>
  )
}

